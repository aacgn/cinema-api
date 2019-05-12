/**
 * @namespace Services
 * @class MoviesService
 */
export class MoviesService {
    public static async findAll(): Promise<String[]> {
        return ['Pulp Fiction', 'Blade Runner', 'Hatred'];
    }
}