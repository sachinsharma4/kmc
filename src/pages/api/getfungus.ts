import { Schema, model, connect } from 'mongoose';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Fungi from 'fungi/fungischema';
import connectdb from 'fungi/middelware';

const handler = async (
    req: NextApiRequest,
    res: NextApiResponse
) => {
   
   await connectdb();
   
    res.status(200).json(await Fungi.find(req.query).catch((err:Error)=> res.status(400).json({ err }))
    )
    console.log(req)
    console.log(res)
}
export default handler
