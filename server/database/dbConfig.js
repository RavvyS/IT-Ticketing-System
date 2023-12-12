import mysql from "mysql2";

const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: "3308",
  database: "it_ticketing_system",
  user: "root",
  password: "root",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("DB Connected");
});

export default connection;
