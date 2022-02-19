import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import { ICommentData } from '../interfaces';

axios.defaults.baseURL = 'http://localhost:5000/';

export const useFetchCommentsData = (_id: string) => {
    const [comments, setComments] = useState<ICommentData[]>();

    const fetchData = useCallback(async () => {
        await axios.get('api/fetch-all-comments', {
            headers: {
                '_id': _id
            }
        })
            .then(res => setComments(res.data));
    }, []);

    useEffect(() => {
        fetchData();
    }, []);

    return { comments, setComments };
};