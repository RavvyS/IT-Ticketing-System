import express from "express";
const ticketRouter = express.Router();

import {
  getTicket,
  createTicket,
  getUniqueTicket,
  deleteTicket,
  editTicket,
  updateStatus,
} from "../controllers/ticketController";

ticketRouter.route("/").get(getTicket).post(createTicket);
ticketRouter.route("/:id").get(getUniqueTicket).delete(deleteTicket).patch(editTicket).patch(updateStatus);

export default ticketRouter;
