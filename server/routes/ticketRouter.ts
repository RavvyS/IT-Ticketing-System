import express from "express";
const ticketRouter = express.Router();

import { getTicket } from "../controllers/ticketController";

ticketRouter.route("/").get(getTicket);

export default ticketRouter;
