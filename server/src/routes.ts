import express from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";

const routes = express.Router();
const classesController = new ClassesController();
const cnxController = new ConnectionsController();

// Aulas
routes.get("/classes", classesController.index);
routes.post("/classes", classesController.create);

// Conexões
routes.get("/connections", cnxController.index);
routes.post("/connections", cnxController.create);

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
