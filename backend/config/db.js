// config/db.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
    const dbURL = process.env.DB_URL;

    try {
        await mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Cannot connect to MongoDB", err);
        process.exit(1);
    }
};

export default connectDB; // default export
