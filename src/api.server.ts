import * as express from 'express';
import * as dotenv from 'dotenv';
import * as http from 'http';
import * as socketIo from 'socket.io';
import webSocketRoutes from './api-socket.routes';
import httpRoutes from './api-http.routes';
import * as bodyParser from 'body-parser';
import { setupDb } from './app/shared/utils/database.functions';

async function startup() {

    // Ties .env to process.env
    dotenv.config();

    // Inital database setup
    await setupDb();

    // Setup express
    let app = express();

    // Setup HTTP REST API
    app.use(bodyParser.json());
    httpRoutes(app);

    // Create HTTP Server
    let server = http.createServer(app);

    // Setup websockets
    let io = socketIo(server);
    io.on('connection', webSocketRoutes);

    // Start listening for HTTP requests
    server.listen(3000);
}

try {
    startup();
} catch (error) {
    console.error(`Application error ${error}`);
}
