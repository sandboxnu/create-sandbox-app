import { NextApiRequest, NextApiResponse } from "next"

export interface Club {
  name: string
  rating: number,
}

export default (req: NextApiRequest, res: NextApiResponse<Club>) => {
  setTimeout(()=> {

  res.status(200).json({name: 'Sandbox', rating: 10 })
  }, 500)
}

