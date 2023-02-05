import {config} from "dotenv"
import express, {Request,Response} from "express";
import mongoose from "mongoose";
import cors from "cors"
//Controllers
import userRegisterController from "./controllers/userRegisterController";
import userLoginController from "./controllers/userLoginController";
import mapsGetController from "./controllers/mapsGetController";
import mapsCreateController from "./controllers/mapsCreateController";
import mapsGetUsersMapsController from "./controllers/mapsGetUsersMapsController";
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
app.get("/maps",mapsGetController);
app.get("/maps/users",mapsGetUsersMapsController);
app.post("/maps/create",mapsCreateController);

//database

mongoose.connect(process.env.MONGO_URL!).then(()=>{
app.listen(PORT);
console.log(`Listening on port ${PORT}`)
});