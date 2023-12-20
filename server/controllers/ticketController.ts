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
      created_at,
    });
    res.status(201).json({ response });
  } catch (error) {
    console.error(error);
  }
};

const getUniqueTicket = async (req: any, res: any) => {
  try {
    const { _id } = req.params;
    const response = await ticketModel.findOne({ id: _id });
    res.status(200).json({ response });
  } catch (error) {
    console.error(error);
  }
};

const updateTicket = async (req: any, res:any) => {
  try {
    
  } catch (error) {
    
  }
}

const deleteTicket = async (req: any, res: any) => {
  try {
    const { _id } = req.params;
    const response = await ticketModel.findOneAndDelete({ id: _id });
    res.status(200).json({ response });
  } catch (error) {
    console.error(error);
  }
};

export { getTicket, createTicket, getUniqueTicket, deleteTicket };
