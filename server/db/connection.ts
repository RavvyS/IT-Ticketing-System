import mongoose from "mongoose";

const connection = async (url: any) => {
  try {
    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB: ", error);
    throw error; // Re-throw the error to propagate it to the caller
  }
};

export { connection };
