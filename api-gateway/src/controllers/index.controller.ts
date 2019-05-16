import { Request, Response } from 'express';

/**
 * @namespace Controllers
 * @class IndexController
 */
export class IndexController {
    public static async toSwagger(req: Request, res: Response) {
        return res.redirect('/swagger');
    }
}