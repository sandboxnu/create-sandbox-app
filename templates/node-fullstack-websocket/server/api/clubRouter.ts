import { Router, Response } from 'express';
import websocketManager from '../websocketManager';
import { ClubModel } from '../entity/ClubModel';
import { BaseEntity } from 'typeorm';
import { WSMessageType } from '../types';

const clubRouter = Router()

export type Club = Pick<ClubModel, Exclude<keyof ClubModel, keyof BaseEntity>>;

clubRouter.get('/', async (req, res: Response<Club[]>) => {
  try {
    const c = await ClubModel.find();
    res.status(200).json(c);
  } catch (e) {
    res.status(500)
  }
})

export type CreateClubParams = { name: string, rating: number };

clubRouter.post('/', async (req, res: Response<Club>) => {
  try {
    const { name, rating } = req.body as CreateClubParams;
    const c = await ClubModel.create({ name, rating }).save()
    websocketManager.emitAll(WSMessageType.Refresh, null)
    res.status(201).json(c);
  } catch (e) {
    res.status(500);
  }
})

export type ClubRoutes = {
  index: () => Promise<Club[]>,
  create: (p: CreateClubParams) => Promise<Club>
}

export default clubRouter;
