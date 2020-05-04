import { Router, Response } from 'express';
import { Club, prismaVersion, PrismaClient } from '@prisma/client';
import websocketManager from '../websocketManager';
import { WSMessageType } from 'shared';

const prisma = new PrismaClient();
const clubRouter = Router()

clubRouter.get('/', async (req, res: Response<Club[]>) => {
  try {
    const c = await prisma.club.findMany();
    res.status(200).json(c);
  } catch (e) {
    res.status(500)
  }
})

clubRouter.post('/', async (req, res: Response<Club>) => {
  try {
    const { name, rating } = req.body;
    const c = await prisma.club.create({ data: {name, rating }});
    websocketManager.emitAll(WSMessageType.Refresh, null)
    res.status(201).json(c);
  } catch (e) {
    res.status(500);
  }
})

export default clubRouter;
