import * as Express from 'express';
import * as bodyParser from 'body-parser';
import { MoviesRouter } from './routes/movies.route';

class ApiGateway {
    public app: Express.Application;
    public PORT = '8080';

    constructor() {
        this.app = Express();
        this._config();
    }

    public async start() {
        console.log(`API gateway started.`);

        this.app.listen(this.PORT, () => {
            console.log(`Server listening in http://localhost:${this.PORT}`);
        });
    }

    private async _config(): Promise<void> {
        // Allowing body parser JSON
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));

        // Routing
        this.app.use('/movies', MoviesRouter());
    }

}

new ApiGateway().start();