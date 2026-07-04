import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";
dotenv.config();

// Change DNS
dns.setServers(["1.1.1.1", "8.8.8.8"]);



const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;