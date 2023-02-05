import {Request, Response} from "express";
import Map from "../models/Maps"

export default async function mapsGetUsersMapsController(req: Request, res : Response){
    const usersMaps = await Map.find({authorName : req.body.authorName});
    res.json(usersMaps);
}