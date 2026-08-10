import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/connectDB.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth_route.js";
import userRouter from "./routes/user_route.js";
import interviewRouter from "./routes/interview.route.js";
import paymentRouter from "./routes/payment.route.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      // Allow any localhost origin or vercel.app subdomain
      if (/^http:\/\/localhost:\d+$/.test(origin) || origin.endsWith(".vercel.app")) {
        return callback(null, true);
      }
      callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

// Connect to DB for each request (required for Serverless cold-starts)
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (error) {
    next(error);
  }
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/interview", interviewRouter);
app.use("/api/payment", paymentRouter);

const PORT = process.env.PORT || 8000;

// Only listen locally, Vercel will handle listening in production
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

export default app;
