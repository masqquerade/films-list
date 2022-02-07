import { Request, Response, NextFunction } from 'express'

export const validateIncomeData = (req: Request, res: Response, next: NextFunction): void | Response => {
    const { title, body, logo } = req.body;
    if (!title || !body || !logo) return res.json('There is now data.').status(403);
    
    next();
};