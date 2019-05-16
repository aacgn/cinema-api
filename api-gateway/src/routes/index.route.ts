import { Router } from 'express';
import { IndexController } from '../controllers/index.controller';
/**
 * @namespace Routes
 * @class IndexRouter
 */
export function IndexRouter(): Router {
    const router = Router();

    router.get('/', IndexController.toSwagger);

    return router;
}