import * as Express from 'express';
import { MoviesRouter } from './routes/movies.route';
import DatabaseConfig from "./config/database.config";

class MoviesService {
    public app: Express.Application;
    public PORT = '8081';

    constructor() {
        this.app = Express();
        this._config();
    }

    public async start() {
        console.log(`Service movies_service started.`);

        this.app.listen(this.PORT, () => {
            console.log(`Server listening in http://localhost:${this.PORT}`);
        });
    }

    private async _config(): Promise<void> {
        //Connecting to database
        await DatabaseConfig.connect();

        // Routing
        this.app.use('/movies', MoviesRouter());
    }

}

new MoviesService().start();