import express from "express";
const ticketRouter = express.Router();

import {
  getTicket,
  createTicket,
  getUniqueTicket,
} from "../controllers/ticketController";

ticketRouter.route("/").get(getTicket).post(createTicket);
ticketRouter.route("/:id").get(getUniqueTicket);

export default ticketRouter;
