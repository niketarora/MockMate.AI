import dotenv from "dotenv"
dotenv.config()
import Razorpay from "razorpay"

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || "dummy_razorpay_key_id",
  key_secret: process.env.RAZORPAY_KEY_SECRET || "dummy_razorpay_key_secret",
});

export default razorpay