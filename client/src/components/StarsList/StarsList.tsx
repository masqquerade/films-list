import React, { SetStateAction, useState } from 'react';

import { StarsWrapper } from './styles';

import { Star } from '../../svgs/Star';

type TStar = {
    isOn: Boolean;
    isFixed: Boolean;
};

interface IStarsList {
    stars: TStar[];
    setStars: SetStateAction<any>;
};

const StarsList: React.FC<IStarsList> = ({ stars, setStars }) => {
    const onStarOver = (idx: number, elem: any) => {
        setStars(() => {
            const arr = stars.map((star, index) => {
                if (idx === index) {
                    elem.isOn = true;
                    return elem;
                };
                return star;
            });

            const activatedZoneArr = arr.map((star, index) => {
                if (index < idx && !star.isOn) star.isOn = true;
                return star;
            });

            return activatedZoneArr;
        });
    };

    const onStarOut = () => {
        setStars(() => {
            return stars.map(star => {
                if (!star.isFixed) {
                    star.isOn = false;
                }
                return star;
            })
        })
    };

    const onStarClick = (idx: number) => {
        setStars(() => {
            const clearedArr = stars.map(star => {
                if (star.isFixed) {
                    star.isFixed = false
                }
                return star;
            });

            return clearedArr.map((star, index) => {
                if (index <= idx && !star.isFixed) star.isFixed = true;
                return star;
            })
        });
    };

    return (
        <StarsWrapper>
            {
                stars.map((el, index) => {
                    return (
                        <div
                            onMouseOver={() => onStarOver(index, el)}
                            onMouseOut={onStarOut}
                            onClick={() => onStarClick(index)}
                            style={{ maxWidth: '1vw' }}
                        >
                            <Star
                                styles={{ fill: el.isOn ? 'yellow' : '#575757' }}
                                height={'20'}
                                width={'20'}
                            />
                        </div>
                    )
                })
            }
        </StarsWrapper>
    );
};

export default StarsList;