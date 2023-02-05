import Map from "../models/Maps"
import {Request,Response} from "express";
export default async function userLoginController(req: Request, res : Response){
    const allMaps = await Map.find();
    res.json(allMaps);
}