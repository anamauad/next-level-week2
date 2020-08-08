import { Request, Response } from "express";
import db from "../database/connection";

export default class ConnectionsController {
  async index(request: Request, response: Response) {
    const totalConnections = await db("connections").count("* as total");

    const { total } = totalConnections[0];

    return response.status(201).json({ total });
  }

  async create(request: Request, response: Response) {
    const { teacher_id } = request.body;

    try {
      await db("connections").insert({
        teacher_id,
      });

      return response.status(201).send();
    } catch (error) {
      console.error(error);

      return response
        .status(400)
        .json({
          error: "Unexpected error while registering new connection",
          data: teacher_id,
        });
    }
  }
}
