import Comment from '../models/Comment';

import { ICommentData } from '../interfaces/CommentInterfaces';

export default class CommentService {
    static async createComment(data: ICommentData): Promise<void> {
        try {
            await Comment.create({...data});
        } catch (e) {
            console.log(e)
        }
    };

    static async fetchAllComment(_id: string | string[] | undefined): Promise<ICommentData[]> {
        const data = await Comment.find({ filmId: _id });
        return data;
    };
};