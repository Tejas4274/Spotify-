import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("connection establish");
  });
  await mongoose.connect(`${process.env.MONGOBD_URI}/spotify`);
};

export default connectDB;
