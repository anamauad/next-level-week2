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

  const insertedTeacherIds = await db("teachers").insert({
    name,
    avatar,
    whatsapp,
    bio,
  });

  const teacher_id = insertedTeacherIds[0];

  const insertedClassIds = await db("classes").insert({
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

  await db("class_schedule").insert(classSchedule);

  return response.json({ action: "post classes", data: request.body });
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
