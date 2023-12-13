import userModel from "../models/userModel";
import jwt from "jsonwebtoken";

const secret: any = process.env.SECRET;

const createToken = (id: any) => {
  return jwt.sign({ id }, secret, { expiresIn: "3d" });
};

const signupUser = async (req: any, res: any) => {
  const { email, password } = req.body;
  try {
    const newUser = await userModel.createUser(email, password);
    // create token
    const token = createToken(newUser.insertId); // Assuming id is auto-incremented in your user table
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default signupUser;
