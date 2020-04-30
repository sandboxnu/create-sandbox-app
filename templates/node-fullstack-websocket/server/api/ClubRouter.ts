import { ClubModel } from "../entity/ClubModel";
import { Router, Response } from 'express';
import { Club } from '../../shared/types';
import { pick } from "lodash";

var router = Router()

/**
 * Routers (Controllers) should NOT handle business logic.
 * Pull info out of req and hand it over to a Service.
 */
router.get('/', async (req, res: Response<Club>) => {
  const c: Club = pick(, ['name', 'rating']);
  const c = await ClubModel.findOne();
  res.status(200).json(c);
})

export default router;
