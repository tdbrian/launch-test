import { Express } from 'express';
import { attemptLogin } from './app/login/login.api';

export default (app: Express) => {
    app.get('/', (req, res) => res.send('Welcome to TestLaunch.io API Server'));
    app.post('/login', attemptLogin);
};
