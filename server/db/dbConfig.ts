import mysql, { ConnectionOptions } from "mysql2";

const access: ConnectionOptions = {
  host: "127.0.0.1",
  port: 3308,
  user: "root",
  password: "root",
  database: "it_ticketing_system",
};

const connection = mysql.createConnection(access);

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to DB:", err);
    return;
  }
  console.log("Connection to DB Successful");
});

export { connection };
