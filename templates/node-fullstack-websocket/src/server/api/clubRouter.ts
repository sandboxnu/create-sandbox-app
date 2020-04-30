import { Router, Response, Request } from 'express';
import { Club } from '../../shared/types';
import { getClub, createClub } from "../service/clubService";

var clubRouter = Router()

/**
 * Routers (Controllers) should NOT handle business logic.
 * Pull info out of req and hand it over to a Service.
 */
clubRouter.get('/', async (req, res: Response<Club>) => {
  const c = await getClub();
  res.status(200).json(c);
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
