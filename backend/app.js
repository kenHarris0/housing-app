import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRouter from "./routes/user.js";
import hotelRouter from "./routes/hotel.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
await connectDB();

// User routes
app.use("/user", userRouter);
app.use("/hotel",hotelRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
