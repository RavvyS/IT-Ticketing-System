import express from "express";
const ticketRouter = express.Router();

import { getTicket, createTicket } from "../controllers/ticketController";

ticketRouter.route("/").get(getTicket).post(createTicket);

export default ticketRouter;
