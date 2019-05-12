import { Router } from "express";
import { MoviesController } from "../controllers/movies";
/**
 * @namespace Routes
 * @class MoviesRouter
 */
export function MoviesRouter(): Router {
    const router = Router();

    router.get("/", MoviesController.getMovies);

    return router;
}