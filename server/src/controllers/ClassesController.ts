import { Request, Response } from "express";
import convertHoursToMinutes from "../utils/convertHoursToMinutes";
import db from "../database/connection";

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

export default class ClassesController {
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
      await transaction.rollback();
      return response
        .status(400)
        .json({ error: "Unexpected error while creating new class" });
    }
  }
}
