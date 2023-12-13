import { connection } from "../db/dbConfig";
import validator from "validator";
import bcrypt from "bcrypt";

const userModel = {
  createUser: (callback: any) => {
    const signup = async (email: string, password: string) => {
      // Validation
      if (!email || !password) {
        throw Error("All fields must be filled");
      } else if (!validator.isEmail(email)) {
        throw Error("Email is not valid");
      } else if (!validator.isStrongPassword(password)) {
        throw Error("Password not strong enouhg");
      }

      const exists = connection.query(
        "SELECT email FROM user WHERE email = ?",
        async (error, results) => {
          if (exists) {
            throw Error(`Email: ${exists} already in use`);
          }
          const salt = await bcrypt.genSalt(10);
          const hash = await bcrypt.hash(password, salt);

          const user = connection.query("INSERT INTO user VALUES (?, ?)", {
            email,
            hash,
          });

          callback(error, results);
        }
      );
    };
  },
};

export default userModel