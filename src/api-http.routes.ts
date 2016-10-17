import { Express } from 'express';

export default (app: Express) => {
    app.get('/', (req, res) => res.send('Welcome to TestLaunch.io API Server'));
    app.get('/login', (req, res) => res.send({status: 'Welcome to TestLaunch.io API Server'}));
};
