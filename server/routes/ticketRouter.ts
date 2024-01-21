import express from "express";
const ticketRouter = express.Router();

import { requireAuth } from "../middleware/requireAuth";

import {
  getTicket,
  createTicket,
  getUniqueTicket,
  deleteTicket,
  editTicket,
  updateStatus,
  getTicketsOnStatus,
} from "../controllers/ticketController";

ticketRouter.use(requireAuth)

ticketRouter.route("/").get(getTicket).post(createTicket);
ticketRouter
  .route("/:id")
  .get(getUniqueTicket)
  .delete(deleteTicket)
  .patch(editTicket);
ticketRouter.route("/:id/updateStatus").patch(updateStatus);
ticketRouter.route("/status/:status").get(getTicketsOnStatus);

export default ticketRouter;
