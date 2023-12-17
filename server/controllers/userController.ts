import bcrypt from "bcrypt";
import validator from "validator";
import userModel from "../models/userModel";

const signUp = async (req: any, res: any) => {
  const { email, password } = req.body;
  try {
    // Validation
    if (!email || !password) {
      throw Error("All fields must be filled");
    }
    if (!validator.isEmail(email)) {
      throw Error("Email is not valid");
    }
    if (!validator.isStrongPassword(password)) {
      throw Error("Password not strong enough");
    }

    const exists = await userModel.findOne({ email });

    if (exists) {
      throw Error(`Email: ${exists} already in use`);
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await userModel.create({ email, password: hash });

    res.status(201).json({ user });
  } catch (error) {
    console.error(error);
  }
};
