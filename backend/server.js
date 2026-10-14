import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import courseRoutes from './routes/courseRoutes.js'
import authRoutes from "./routes/authRoutes.js";
import enrollmentRoutes from "./routes/enrollmentRoutes.js";
import notificationRoutes from './routes/notificationRoutes.js'
import wishlistRoutes from './routes/wishlistRoutes.js'
import adminRoutes from "./routes/adminRoutes.js";

import path from "path";
import { fileURLToPath } from "url";


const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);


dotenv.config();

connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads",express.static(path.join(dirName,"uploads")))

const PORT = process.env.PORT || 5000;

app.use('/api/auth',authRoutes)
app.use('/api/courses',courseRoutes)
app.use("/api/enrollment", enrollmentRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/admin", adminRoutes);

app.listen(PORT,()=>{
    console.log("server 5001 Started")
})