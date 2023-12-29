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
    if (!response) {
      res.status(404).json({ error: "Ticket not found" });
      return;
    }
    res.status(200).json({ response });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const editTicket = async (req: any, res: any) => {
  const { subject, description } = req.body;
  try {
    const { id } = req.params;
    const response = await ticketModel.findOneAndUpdate(
      { _id: id },
      { subject, description }
    );
    if (!response) {
      res.status(404).json({ error: "Ticket not found" });
      return;
    }
    res.status(200).json({ subject, description });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteTicket = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const response = await ticketModel.findOneAndDelete({ _id: id });
    if (!response) {
      res.status(404).json({ error: "Ticket not found" });
      return;
    }
    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateStatus = async (req: any, res: any) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const response = await ticketModel.findOneAndUpdate(
      { _id: id },
      { status: status },
      { new: true }
    );
    res.status(200).json({ response });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getTicketsOnStatus = async (req: any, res: any) => {
  const { status } = req.params;
  try {
    const response = await ticketModel.countDocuments({ status: status });
    res.status(200).json({ count: response });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export {
  getTicket,
  createTicket,
  getUniqueTicket,
  deleteTicket,
  editTicket,
  updateStatus,
  getTicketsOnStatus,
};
