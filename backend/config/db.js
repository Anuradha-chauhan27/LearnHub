
import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        console.log(
            "MongoDB URI loaded:",
            Boolean(process.env.MONGO_URl)
        );

        await mongoose.connect(process.env.MONGO_URl);

        console.log("Connected database:", mongoose.connection.name);
    } catch (error) {
        console.error("Connection Failed:", error.message);
        process.exit(1);
    }
};
