import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js"

const app = express();

dotenv.config()

app.use(bodyParser.json({ limit: "32mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "32mb", extended: true }));
app.use(cors());
app.use("/posts",postRoutes)
app.use("/user",userRoutes)

app.get("/",(req,res)=>{
  res.send("Welcome to Instaverse API")
})

app.get("/",(req,res) =>{
  res.send("Welcome to Insteverse API")
})

app.get("/",(req,res)=> {
  res.json("server start")
})




const PORT = process.env.PORT || 5000;
const URI = process.env.MONGO_URI;

const ConnectDB = async () => {
  try {
    await mongoose.connect(URI);
    app.listen(PORT, () => console.log(`server running on port ${PORT}`));
  } catch (error) {
    console.error('connection to db failed', error.message);
  }
};

ConnectDB();
mongoose.connection.on('open', () => console.log('db connected'));
mongoose.connection.on('error', (err) => console.log(err.message));
