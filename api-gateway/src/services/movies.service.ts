import axios from 'axios';
import adapter from 'axios/lib/adapters/http';

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
    public static async create(name: string, description: string): Promise<{}> {
        try {
            const movie = await axios.post('http://movies-service:8081/movies/', {
                name,
                description
            }, { adapter });
            return movie.data;
        } catch (e) {
            console.info(e.message);
        }
    }

    /**
     * Find all movies in the database
     */
    public static async findAll(): Promise<{}> {
        try {
            const movies = await axios.get('http://movies-service:8081/movies/', { adapter });
            return movies.data;
        } catch (e) {
            console.info(e.message);
        }
    }
}