import React from 'react';

import { ReviewWrapper, LabelTextWrapper, BottomTextWrapper, StarsWrapper } from './styles';

import { Star } from '../../svgs/Star';

interface IReviewItem {
    body: string;
    stars: number;
};

const ReviewItem: React.FC<IReviewItem> = ({ body, stars }) => {
    return (
        <div>
            <ReviewWrapper>
                <LabelTextWrapper>
                    <h3>Пользователь сайта</h3>
                    <StarsWrapper>
                        {
                            new Array(stars).fill('').map((el, idx) => {
                                return <Star 
                                    styles={{ fill: 'yellow' }}
                                    height={'10'}
                                    width={'10'} 
                                    key={idx}
                                />  
                            })
                        }
                    </StarsWrapper>
                </LabelTextWrapper>

                <BottomTextWrapper>
                    <h4>{body}</h4>
                </BottomTextWrapper>
            </ReviewWrapper>
        </div>
    );
};

export default ReviewItem;