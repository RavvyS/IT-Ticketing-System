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
    const { id } = req.params;
    const response = await ticketModel.findById(id);
    if(!id) {
      res.status(404).json(`No Ticket with id:${id}...`)
    }
    res.status(200).json({ response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const editTicket = async (req: any, res:any) => {
  const { subject, description } =  req.body
  try {
    const {_id } = req.params
    const response = await ticketModel.findOneAndUpdate({ _id }, { subject, description})
    res.status(200).json({ response })
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const deleteTicket = async (req: any, res: any) => {
  try {
    const { _id } = req.params;
    const response = await ticketModel.findOneAndDelete({ _id });
    res.status(200).json({ response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { getTicket, createTicket, getUniqueTicket, deleteTicket, editTicket };
