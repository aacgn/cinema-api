import { Request, Response } from 'express';
import { MoviesService } from '../services/movies.service';

/**
 * @namespace Controllers
 * @class MoviesController
 */
export class MoviesController {
    public static async getMovies(req: Request, res: Response) {
        const movies = await MoviesService.findAll();
        return res.json(movies);
    }

    public static async addMovie(req: Request, res: Response) {
        const movie = await MoviesService.create(req.body.name, req.body.description);
        return res.json(movie);
    }
}