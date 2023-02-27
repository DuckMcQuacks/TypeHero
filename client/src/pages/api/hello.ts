// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://typehero:zLeBwhPldgiNpmWQ@typehero.yqdawhq.mongodb.net/?retryWrites=true&w=majority";
type Data = {
  name: string
}

export default function handler(req: NextApiRequest,res: NextApiResponse<Data>){
  const client = new MongoClient(uri);
  const database = client.db("")
}
