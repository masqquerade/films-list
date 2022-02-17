import React from 'react';

import ReviewItem from '../ReviewItem/ReviewItem';

import { ICommentData } from '../../interfaces/index';

interface IReviews {
    comments: ICommentData[];
    setComments: React.Dispatch<React.SetStateAction<ICommentData[] | undefined>>
};

const Reviews: React.FC<IReviews> = ({ comments, setComments }) => {
    return (
        <div>
            {
                comments?.map((comment, index) => {
                    return (
                        <ReviewItem 
                            body={comment.body}
                            stars={comment.stars}
                            key={index}
                        />
                    );
                })
            }
        </div>
    );
};

export default Reviews;