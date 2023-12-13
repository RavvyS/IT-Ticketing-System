import { connection } from "../db/dbConfig";

const ticketModel = {
  getTicket: (callback: any) => {
    connection.query("SELECT * FROM ticket", (error, results) => {
      callback(error, results);
    });
  },
};
