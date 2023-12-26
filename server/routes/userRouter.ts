import express from "express";
const userRouter = express.Router();

import { signUp, login, getUsers } from "../controllers/userController";

userRouter.route("/").get(getUsers)
userRouter.route("/signup").post(signUp);
userRouter.route("/login").post(login);

export default userRouter;
