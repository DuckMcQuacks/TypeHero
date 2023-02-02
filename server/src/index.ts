import {config} from "dotenv"
config();
import express, {Request,Response} from "express";
import mongoose from "mongoose";
import User from "./models/Users";
const app = express();
app.use(express.json());
const PORT = 5000

app.get("/",(req: Request,res : Response) =>
{
    res.send("Hello world!"); 
})
app.post("/user/register",async (req: Request, res : Response)=>{
    const newUser = new User(
        {
            name: req.body.name,
            password: req.body.password
        }
    )
    const createUser = await newUser.save();
    res.json(createUser);
})
mongoose.connect(process.env.MONGO_URL!).then(()=>{
app.listen(PORT);
console.log(`Listening on port ${PORT}`)
})
console.log(process.env);