import { Schema } from "mongoose";

// Interface
interface Ticket {
  subject: string;
  description: string;
  urgency: boolean;
  status: number;
  created_at: Date;
}

// Schema
const ticketSchema = new Schema<Ticket>({
  subject: {
    type: String,
    // required: true
  },
  description: {
    type: String,
  },
  urgency: {
    type: Boolean,
  },
  status: {
    type: Number,
  },
  created_at: {
    type: Date,
  },
});

export default ticketSchema;
