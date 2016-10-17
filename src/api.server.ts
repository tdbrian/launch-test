import * as express from 'express';
import * as http from 'http';
import * as socketIo from 'socket.io';
import webSocketRoutes from './api-socket.routes';
import httpRoutes from './api-http.routes';

let app = express();
let server = http.createServer(app);
let io = socketIo(server);

httpRoutes(app);
io.on('connection', webSocketRoutes);
server.listen(3000);
