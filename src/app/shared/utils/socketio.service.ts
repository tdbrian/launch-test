import { Injectable } from '@angular/core';
import 'socket.io-client';
import * as socketIoClient from 'socket.io-client';

@Injectable()
export class SocketioService {
    socket: SocketIOClient.Socket;

    constructor() {
        this.socket = socketIoClient('http://localhost:3000');
        this.socket.on('connect', () => console.info('connected to server websocket!'));
    }
}
