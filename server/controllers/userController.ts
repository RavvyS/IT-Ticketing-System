import userModel from "../models/userModel";
import jwt from "jsonwebtoken";

// magesecretekamekathamawhottigepuko -> This is secret and should be put in .env =(
const createToken = (_id: any) => {
  return jwt.sign({ _id: _id }, "magesecretekamekathamawhottigepuko", {
    expiresIn: "3d",
  });
};

const getUsers = async (req: any, res:any) => {
  try {
    const response = await userModel.find()
    res.status(200).json(response)
  } catch (error) {
    res.status(500).json('error')
  }
}

const login = async (req: any, res: any) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.login(email, password);

     // Create a token
     const token = createToken(user._id);
     res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json(console.log(error));
  }
};

const signUp = async (req: any, res: any) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.signup(email, password);
    // Create a token
    const token = createToken(user._id);
    res.status(201).json({ email, token });
  } catch (error) {
    res.status(400).json(console.log(error));
  }
};

export { signUp, login, getUsers };
