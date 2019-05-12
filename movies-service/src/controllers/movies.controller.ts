import { Request, Response } from "express";
import { MoviesService } from "../services/movies.service";
/**
 * @namespace Controllers
 * @class MoviesController
 */
export class MoviesController {
    public static async getMovies(req: Request, res: Response) {
        const movies = await MoviesService.findAll();
        res.json(movies);
    }
}