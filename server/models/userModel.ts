import { connection } from "../db/dbConfig";
import validator from "validator";
import bcrypt from "bcrypt";

const userModel = {
  createUser: async (email: string, password: string) => {
    // Validation
    if (!email || !password) {
      throw Error("All fields must be filled");
    } else if (!validator.isEmail(email)) {
      throw Error("Email is not valid");
    } else if (!validator.isStrongPassword(password)) {
      throw Error("Password not strong enough");
    }

    const existingUser = await connection.query(
      "SELECT email FROM user WHERE email = ?",
      [email]
    );

    if (existingUser.length > 0) {
      throw Error(`Email: ${email} already in use`);
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const newUser = await connection.query(
      "INSERT INTO user (email, password) VALUES (?, ?)",
      [email, hash]
    );

    return newUser;
  },
};

export default userModel;
