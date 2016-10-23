import * as express from 'express';
import * as dotenv from 'dotenv';
import * as http from 'http';
import * as socketIo from 'socket.io';
import webSocketRoutes from './api-socket.routes';
import httpRoutes from './api-http.routes';
import * as bodyParser from 'body-parser';
import { setup, close } from './app/shared/utils/database';

// Ties .env to process.env
dotenv.config();

setup().then(() => {

}).catch(() => console.error('Unable to start server due to DB connection issue.'));

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
