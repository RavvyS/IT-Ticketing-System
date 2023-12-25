import express from "express";
const ticketRouter = express.Router();

import {
  getTicket,
  createTicket,
  getUniqueTicket,
  deleteTicket,
  editTicket,
  updateStatus,
  getTicketsOnStatus,
} from "../controllers/ticketController";

ticketRouter.route("/").get(getTicket).post(createTicket);
ticketRouter
  .route("/:id")
  .get(getUniqueTicket)
  .delete(deleteTicket)
  .patch(editTicket)
  .patch(updateStatus);

ticketRouter.route("/").get(getTicketsOnStatus);

export default ticketRouter;
