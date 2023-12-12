// Dependencies
import express from "express";
import "dotenv/config";

import connection from "./database/dbConfig.js";

// Middleware
const app = express();

const port = process.env.PORT || 9000;

const start = async () => {
  try {
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
