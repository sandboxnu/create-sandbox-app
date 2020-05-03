import { Router, Response } from 'express';
import { getClubs, createClub } from "../service/clubService";
import { Club } from '@prisma/client';

var clubRouter = Router()

/**
 * Routers (Controllers) should NOT handle business logic.
 * Pull info out of req and hand it over to a Service.
 */
clubRouter.get('/', async (req, res: Response<Club[]>) => {
  try {
    const c = await getClubs();
    res.status(200).json(c);
  } catch (e) {
    res.status(500)
  }
})

clubRouter.post('/', async (req, res: Response<Club>) => {
  try {
    const c = await createClub(req.body);
    res.status(201).json(c);
  } catch(e) {
    res.status(500);
  }
})

export default clubRouter;
