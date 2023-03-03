import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'
import User from "models/Users";
import connectMongo from 'utils/connectMongo';

export default async function userLoginController(req: NextApiRequest, res : NextApiResponse){
    await connectMongo()
    try{
        const userData = await User.findById(req.body.id)
        res.json(userData.name)
    }
    catch{
        res.json("Failed");
    }
}