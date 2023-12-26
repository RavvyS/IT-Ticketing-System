import { Schema, model, Model, Document } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

interface User {
  _id(_id: any): unknown;
  email: string;
  password: string;
  company: string;
  no_employees: string;
}

// Extend the Mongoose Model interface with custom static methods
interface UserModel extends Model<User> {
  signup(email: string, password: string): Promise<User>;
  login(email: string, passowrd: string): Promise<User>;
}

const userSchema = new Schema<User>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  company: {
    type: String,
  },
  no_employees: {
    type: String,
  }
});

// static signup method
userSchema.statics.signup = async function (email, password) {
  // validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect Email");
  }

  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect Password");
  }
  return user;
};

const userModel = model<User, UserModel>("User", userSchema);
export default userModel;
