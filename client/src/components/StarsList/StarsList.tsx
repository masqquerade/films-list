import React, { useState } from 'react';

import { Star } from '../../svgs/Star';

const StarsList: React.FC = () => {
    const [stars, setStars] = useState([
        {
            isOn: false,
            isFixed: false
        },
        {
            isOn: false,
            isFixed: false
        },
        {
            isOn: false,
            isFixed: false
        },
        {
            isOn: false,
            isFixed: false
        },
        {
            isOn: false,
            isFixed: false
        }
    ]);

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
        <div>
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
                            />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default StarsList;