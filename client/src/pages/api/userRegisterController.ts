import type { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcrypt'
import User from "models/Users";
import connectMongo from 'utils/connectMongo';

export default async function userRegisterController(req: NextApiRequest, res : NextApiResponse){
    await connectMongo();
    const userData = await User.find({name: req.body.name})
    if(userData.length != 0)
    {
        res.json("failed");
        return 1;
    }
    bcrypt.hash(req.body.password, 10, async function(err, hash) {
        const newUser = new User(
            {
                name: req.body.name,
                password: hash,
            }
        )
        const createUser = await newUser.save();
        res.json(createUser._id);
    });
}