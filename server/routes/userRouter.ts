import express from "express";
const userRouter = express.Router();

import { signUp, login } from "../controllers/userController";

userRouter.route("/signup").post(signUp);
userRouter.route("/login").get(login);

export default userRouter;
