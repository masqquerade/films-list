import axios from 'axios';

import { ICommentData } from '../interfaces/index';

axios.defaults.baseURL = 'http://localhost:5000/';

export const createComment = async (data: ICommentData) => {
    await axios.post('api/create-comment', data);
};