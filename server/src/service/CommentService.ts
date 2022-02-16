import Comment from '../models/Comment';

import { ICommentData } from '../interfaces/CommentInterfaces';

export default class CommentService {
    static async createComment(data: ICommentData): Promise<void> {
        await Comment.create(data);
    };

    static async fetchAllComment(_id: string | string[] | undefined): Promise<ICommentData[]> {
        const data = await Comment.find({ filmId: _id });
        return data;
    };
};