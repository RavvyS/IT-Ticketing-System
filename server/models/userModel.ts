import { Schema, model } from "mongoose";

interface User {
  email: string;
  password: string;
}

const userSchema = new Schema<User>({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
});

const userModel = model("User", userSchema);
export default userModel;
