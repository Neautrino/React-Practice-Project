import mongoose from "mongoose";

export default async function connectDB() {
    try {
        // await mongoose.connect("mongodb+srv://Neautrino:LlEvHUqiFJiV3W4C@cluster0.wtnquka.mongodb.net/simple-form");
        await mongoose.connect(`${process.env.MONGO_URI}`);
        console.log('MongoDB connected successfully');

        mongoose.connection.on('connected', () => {
            console.log("Mongodb Connected");
        });

        mongoose.connection.on('error', (err) => {
            console.log("Mongodb connection error:", err);
        });
    } catch (error) {
        console.log("Mongodb not connected:", error);
    }
}