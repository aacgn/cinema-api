import * as Express from 'express';
import * as bodyParser from 'body-parser';
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../swagger.json';
import { IndexRouter } from './routes/index.route';
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
        this.app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
        this.app.use('/', IndexRouter());
        this.app.use('/api/movies', MoviesRouter());
    }

}

new ApiGateway().start();