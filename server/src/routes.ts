import express from "express";
import db from "./database/connection";
import convertHoursToMinutes from "./utils/convertHoursToMinutes";

const routes = express.Router();

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

// Aulas
routes.post("/classes", async (request, response) => {
  const { name, avatar, whatsapp, bio, subject, cost, schedule } = request.body;

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
});

// routes.get("/teachers", (request, response) => {
//   return response.json({ params: request.query, data: ["abc"] });
// });

// routes.post("/teacher", (request, response) => {
//   return response.json({ action: "post teacher", data: request.body });
// });

// routes.put("/teacher/:id", (request, response) => {
//   return response.json({
//     action: "put teacher",
//     id: request.params.id,
//     data: request.body,
//   });
// });

// routes.delete("/teacher/:id", (request, response) => {
//   return response.json({ action: "delete teacher", id: request.params.id });
// });

export default routes;
