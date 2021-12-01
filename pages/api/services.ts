// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { services } from '../../data';

type Data = {
  name: string
}

const Services = (req: NextApiRequest, res: NextApiResponse) => {
  
  // By default get request

  res.status(200).json({services})
}

export default Services