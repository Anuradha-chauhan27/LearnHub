import mongoose from 'mongoose';

export const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URl);
        console.log("MongoDB Connected Successfully");
    }
    catch(error){
        console.log("Connection Failed",error);
        process.exit(1)
    }
}