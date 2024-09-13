import express from "express";
import cors from "cors";
import "dotenv/config";
import songRouter from "./src/routes/songRoutes.js";
import connectDB from "./src/config/mondodb.js";
import connectCloudinary from "./src/config/cloudinary.js";
import albumRouter from "./src/routes/albumRoutes.js";

//app config stores the instance of the variable
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//middleware  request will parse to the json
app.use(express.json());

//allows frontend to the backend
app.use(cors());

//initializing the routes
app.use("/api/song", songRouter);
app.use("/api/album", albumRouter);
app.get("/", (req, res) => res.send("API WORKING"));

//start express serve
app.listen(port, () => console.log(`Server Started on the ${port}`));
