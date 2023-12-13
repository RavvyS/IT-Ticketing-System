import userModel from "../models/userModel";
import jwt from "jsonwebtoken";

const secret: any = process.env.SECRET;

const createToken = (id: any) => {
  return jwt.sign({ id }, secret, { expiresIn: "3d" });
};

const signupUser = async (req: any, res: any) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.createUser({ email, password });
    // create token
    const token = createToken(user.id)
  } catch (error) {}
};
