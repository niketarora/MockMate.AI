import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";
dotenv.config();

const checkDNSReachable = () => {
  return new Promise((resolve) => {
    const resolver = new dns.Resolver();
    resolver.setServers(["1.1.1.1", "8.8.8.8"]);

    const timeout = setTimeout(() => {
      resolve(false);
    }, 1500);

    resolver.resolve4("google.com", (err) => {
      clearTimeout(timeout);
      if (err) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
};

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  try {
    const customDNSWorking = await checkDNSReachable();
    if (customDNSWorking) {
      dns.setServers(["1.1.1.1", "8.8.8.8"]);
      console.log("Applied global DNS override: 1.1.1.1/8.8.8.8");
    } else {
      console.log("Using system default DNS servers");
    }

    await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message || error);
  }
};

export default connectDB;