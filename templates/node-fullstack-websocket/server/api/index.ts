import { Router } from 'express';
import clubRouter from './clubRouter';
import { ValidationError } from 'express-validation';

const apiRouter = Router();

apiRouter.use('/club', clubRouter);

// Error handling
apiRouter.use((err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err)
  }
  return res.status(500).json(err)
})

export default apiRouter;