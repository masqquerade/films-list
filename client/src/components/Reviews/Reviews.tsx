import React from 'react';
import { useParams } from 'react-router-dom';

import ReviewItem from '../ReviewItem/ReviewItem';

import { useFetchCommentsData } from '../../hooks/commentData';

const Reviews: React.FC = () => {
    const { id } = useParams();
    const { comments, setComments } = useFetchCommentsData(id!);

    return (
        <div>
            {
                comments?.map((comment, index) => {
                    return (
                        <ReviewItem 
                            label={comment.owner} 
                            body={comment.body}
                            key={index}
                        />
                    );
                })
            }
        </div>
    );
};

export default Reviews;