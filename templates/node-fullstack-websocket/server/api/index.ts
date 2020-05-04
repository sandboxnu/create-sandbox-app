import { Router } from 'express';
import clubRouter from './clubRouter';

const apiRouter = Router();

apiRouter.use('/club', clubRouter);

export default apiRouter;