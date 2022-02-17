import React from 'react';

import { ReviewWrapper } from './styles';

interface IReviewItem {
    label: string;
    body: string;
};

const ReviewItem: React.FC<IReviewItem> = ({ label, body }) => {
    return (
        <ReviewWrapper>
            <h3>{label}</h3>
            <h4>{body}</h4>
        </ReviewWrapper>
    );
};

export default ReviewItem;