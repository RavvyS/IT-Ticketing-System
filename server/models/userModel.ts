import { connection } from "../db/dbConfig";
import validator from "validator";

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

      const exists = connection.query("SELECT email FROM user WHERE email = ?", (error, results) => {
        if (exists) {
          throw Error(`Email: ${exists} already in use`);
        }
        const 
        callback(error, results);
      });
    };
  },

};
