import ticketModel from "../models/ticketModel";

const getTicket = async (req: any, res: any) => {
  try {
    const response = await ticketModel.find({});
    res.status(200).json({ response });
  } catch (error) {
    console.error(error);
  }
};

const createTicket = async (req: any, res: any) => {
  const { subject, description, urgency, status, created_at } = req.body;
  try {
    const response = await ticketModel.create({
      subject,
      description,
      urgency,
      status,
      created_at
    });
    res.status(201).json({ response });
  } catch (error) {
    console.error(error);
  }
};

export { getTicket, createTicket };
