import { Request, Response, NextFunction } from 'express'
import Film from '../models/Film';

export const validateIncomeData = (req: Request, res: Response, next: NextFunction): void | Response => {
    const { title, body, logo } = req.body;
    if (!title || !body || !logo) return res.json('There is now data.').status(403);

    next();
};

export const validateIdData = async (req: Request, res: Response, next: NextFunction): Promise<void | Response> => {
    try {
        const { _id } = req.body;
        if (!_id) return res.json('There is no _id data.').status(403);
        const candidate = await Film.findOne({ _id });
        if (!candidate) return res.json(`There is now film with id: ${_id}`).status(403);

        next();
    } catch (e) {
        throw e;
    };
};