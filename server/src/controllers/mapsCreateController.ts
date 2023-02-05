import {Request,Response} from "express";
import Map from "../models/Maps";

export default async function userRegisterController(req: Request, res : Response){
        const newMap = new Map(
            {
                name: req.body.name,
                text: req.body.text,
                timesCompleted: 1,
                authorTime: req.body.authorTime,
                averageTime: req.body.authorTime,
                authorName : req.body.authorName,
            })
        const createMap = await newMap.save((err,user)=>{
            if(err)
            {
                    res.json(err)
            }
            else
            {
                res.json("Success!");
            }
        });
    };
