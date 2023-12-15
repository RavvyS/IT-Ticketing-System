import express from "express";
const ticketRouter = express.Router();

import {
  getTicket,
  createTicket,
  getUniqueTicket,
  deleteTicket
} from "../controllers/ticketController";

ticketRouter.route("/").get(getTicket).post(createTicket);
ticketRouter.route("/:id").get(getUniqueTicket).delete(deleteTicket);

export default ticketRouter;
