import { Movie } from '../entities/movie.entity';
import DatabaseConfig from '../config/database.config';

/**
 * @namespace Services
 * @class MoviesService
 */
export class MoviesService {

    /**
     * Creates a new movie in the database
     * @param name
     * @param description
     */
    public static async create(name: string, description: string): Promise<Movie> {
        const repository = DatabaseConfig.getRepository(Movie);
        const newMovie = new Movie(name, description);

        try {
            await repository.save(newMovie);
            return newMovie;
        } catch (e) {
            throw new Error(e.message);
        }
    }

    /**
     * Find all movies in the database
     */
    public static async findAll(): Promise<Movie[]> {
        const repository = DatabaseConfig.getRepository(Movie);

        try {
            const movies: Movie[] = await repository.find();
            return movies;
        } catch (e) {
            throw new Error(e.message);
        }
    }
}