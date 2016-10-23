import { Request, Response } from 'express';
import User from '../shared/models/User';

export const attemptLogin = (req: Request, res: Response): Response => {
    if (req.body.username === 'tdbrian' && req.body.password === 'pa55word') {
        return res.send(new User('Thomas', 'Brian'));
    }

    return res.send(500, 'Invalid login request.');
};
