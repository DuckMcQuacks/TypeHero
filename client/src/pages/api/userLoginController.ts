import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'
import User from "models/Users";
import connectMongo from 'utils/connectMongo';

export default async function userLoginController(req: NextApiRequest, res : NextApiResponse){
    await connectMongo()
    const userData = await User.find({name: req.body.name})
    if(userData.length == 0)
    {
        res.json("failed");
    }
    else
    {
        const hashedPassword = userData[0].password;
        bcrypt.compare(req.body.password, hashedPassword, function(err, result) {
            if (result) {
            res.json(userData[0]._id);
            }
            else{
            res.json("failed");
            }
            });
    }
}