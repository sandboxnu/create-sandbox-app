import club from './club';
import { Router } from 'express';

const apiRouter = Router();

apiRouter.use('/club', club);

export default apiRouter;