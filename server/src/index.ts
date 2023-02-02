import {config} from "dotenv"
import express, {Request,Response} from "express";
import mongoose from "mongoose";
import cors from "cors"
//Controllers
import userRegisterController from "./controllers/userRegisterController";
import userLoginController from "./controllers/userLoginController";
//Setup area

config();
mongoose.set('strictQuery', false);
const app = express();
app.use(cors())
app.use(express.json());

//magicNumber

const PORT = 5000

//End-point haven

app.post("/user/register",userRegisterController);
app.post("/user/login",userLoginController);

//database

mongoose.connect(process.env.MONGO_URL!).then(()=>{
app.listen(PORT);
console.log(`Listening on port ${PORT}`)
});