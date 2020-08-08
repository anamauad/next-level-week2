import { Request, Response } from "express";
import convertHoursToMinutes from "../utils/convertHoursToMinutes";
import db from "../database/connection";

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

export default class ClassesController {
  async index(request: Request, response: Response) {
    const filters = request.query;

    if (!filters.week_day || !filters.subject || !filters.time) {
      return response.status(400).json({
        error: "The search requires the week day, the subject and the time.",
      });
    }

    const subject = (filters.subject as string).trim();
    const week_day = Number(filters.week_day as string);
    const minutes = convertHoursToMinutes(filters.time as string);

    const classes = await db("classes")
      .whereExists(function () {
        this.select("class_schedule.*")
          .from("class_schedule")
          // usar whereRaw dentro de whereExists, conforme recomendado na documentação do knex
          .whereRaw("`class_schedule`.`class_id` = `classes`.`id`")
          .whereRaw("`class_schedule`.`week_day` = ??", [week_day])
          .whereRaw("`class_schedule`.`from` <= ??", minutes)
          .whereRaw("?? < `class_schedule`.`to`", minutes);
      })
      .where("classes.subject", "=", subject)
      .join("teachers", "classes.teacher_id", "=", "teachers.id")
      .select(["classes.*", "teachers.*"]);

    return response.json(classes);
  }

  async create(request: Request, response: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule,
    } = request.body;

    const transaction = await db.transaction();

    try {
      const insertedTeacherIds = await transaction("teachers").insert({
        name,
        avatar,
        whatsapp,
        bio,
      });

      const teacher_id = insertedTeacherIds[0];

      const insertedClassIds = await transaction("classes").insert({
        subject,
        cost,
        teacher_id,
      });

      const class_id = insertedClassIds[0];

      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          week_day: scheduleItem.week_day,
          from: convertHoursToMinutes(scheduleItem.from),
          to: convertHoursToMinutes(scheduleItem.to),
          class_id,
        };
      });

      const schedule_ids = await transaction("class_schedule").insert(
        classSchedule
      );

      await transaction.commit();
      return response.status(201).json({ teacher_id, class_id, schedule_ids });
    } catch (error) {
      console.error(error);

      await transaction.rollback();
      return response
        .status(400)
        .json({
          error: "Unexpected error while creating new class",
          data: { name, avatar, whatsapp, bio, subject, cost, schedule },
        });
    }
  }
}
