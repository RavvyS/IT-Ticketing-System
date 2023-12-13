import express, { Application, Express } from "express";
import dotenv from "dotenv";

// Middleware
dotenv.config();

const app: Application = express();

const port: any = process.env.PORT || 9000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
