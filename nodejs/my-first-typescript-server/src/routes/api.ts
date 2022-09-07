import { Router } from 'express';
import userRouter from './user-router';
import resturauntRouter from './resturaunt-router';
import addressRouter from './address-router';


// Export the base-router
const baseRouter = Router();

// Setup routers
baseRouter.use('/users', userRouter);
baseRouter.use('/resturaunt', resturauntRouter);
baseRouter.use('/address', addressRouter);


// *** Export default **** //

export default baseRouter;
