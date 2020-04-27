import { Club as ClubModel } from "../entity/Club";
import { Router, Response } from 'express';

export interface Club {
  name: string
  rating: number,
}

var router = Router()

router.get('/', async (req, res: Response<Club>, next) => {
  let club = new ClubModel();
  club.name = "Scout"
  club.rating = 10
  await club.save();
  const c = await ClubModel.findOne();
  res.status(200).json(c);
})

export default router;
