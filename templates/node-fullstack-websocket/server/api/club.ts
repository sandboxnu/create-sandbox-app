import { ClubModel } from "../entity/ClubModel";
import { Router, Response } from 'express';
import { Club } from '../../types/api';

var router = Router()

router.get('/', async (req, res: Response<Club>) => {
  let club = new ClubModel();
  club.name = "Scout"
  club.rating = 10
  await club.save();
  const c = await ClubModel.findOne();
  res.status(200).json(c);
})

export default router;
