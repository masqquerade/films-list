import { Request, Response, NextFunction } from 'express';
import { ICommentData } from '../interfaces/CommentInterfaces';

import { Id } from '../types/filmTypes';

export const validateIncomeCommentData = (req: Request, res: Response, next: NextFunction): Response | void => {
    const { filmId, owner, body }: ICommentData = req.body;
    if (!filmId || !owner || !body) return res.json('No data.').status(403);

    next();
};

export const validateCommentIdData = (req: Request, res: Response, next: NextFunction): Response | void => {
    const _id = req.headers._id;
    if (!_id) return res.json('No ID.').status(403);

    next();
};