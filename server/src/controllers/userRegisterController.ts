import {Request,Response} from "express";
import bcrypt from 'bcrypt'
import User from "../models/Users";

export default async function userRegisterController(req: Request, res : Response){
    bcrypt.hash(req.body.password, 10, async function(err, hash) {
        const newUser = new User(
            {
                name: req.body.name,
                password: hash,
                email: req.body.email
            }
        )
        const createUser = await newUser.save((err,user)=>{
            if(err)
            {
                    res.json(err)
            }
            else
            {
                res.json("Success!");
            }
        });
    });
}