import { Request, Response } from 'express';

import CommentService from '../service/CommentService';

export default class CommentController {
    static async createComment(req: Request, res: Response): Promise<Response> {
        await CommentService.createComment(req.body);
        return res.json('Succesfully created.').status(200);
    };

    static async fetchAllComments(req: Request, res: Response): Promise<Response> {
        const _id = req.headers._id;
        const data = await CommentService.fetchAllComment(_id);
        return res.send(data).status(200);
    };
};