import { Request, Response } from 'express';

export interface 

export interface LoginStatus {
    isAuthenticated: boolean;
}

export const attemptLogin = (req: Request, res: Response): Response => {
    return res.send({ status: 'login success' });
};
