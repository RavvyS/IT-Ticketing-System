import express from 'express'
const userRouter = express.Router()

import { signUp } from '../controllers/userController'

userRouter.route("/").post(signUp)

export default userRouter