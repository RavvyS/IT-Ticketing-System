import ticketModel from "../models/ticketModel";

const getTicket = async (req: any, res: any) => {
  try {
    const response = await ticketModel.find({});
    res.status(200).json({ response });
  } catch (error) {
    console.error(error);
  }
};

export { getTicket };
