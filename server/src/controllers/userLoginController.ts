import {Request,Response} from "express";
import bcrypt from 'bcrypt'
import User from "../models/Users";

export default async function userLoginController(req: Request, res : Response){
    const userData = await User.find({name: req.body.name})
    if(userData.length == 0)
    {
        res.json("Incorrect username");
    }
    else
    {
        const hashedPassword = userData[0].password;
        bcrypt.compare(req.body.password, hashedPassword, function(err, result) {
            if (result) {
            res.json("Successful login.");
            }
            else{
            res.json("Password does not match.");
            }
            });
    }
}