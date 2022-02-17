import React, { useState } from 'react';

import { Star } from '../../svgs/Star';

const StarsList: React.FC = () => {
    const [stars, setStars] = useState([
        {
            isOn: false,
        },
        {
            isOn: false,
        },
        {
            isOn: false,
        },
        {
            isOn: false,
        },
        {
            isOn: false,
        }
    ]);

    const onStarOver = (idx: number, elem: any) => {
        setStars(() => {
            const arr = stars.map((el, index) => {
                if (idx === index)  {
                    elem.isOn = true;
                    return elem;
                };
                return el;
            });

            const activatedZoneArr = arr.map((el, index) => {
                if (index < idx && !el.isOn) el.isOn = true;
                return el;
            });

            return activatedZoneArr;
        });
    };

    const onStarOut = () => {
        setStars(() => {
            return stars.map(el => {
                el.isOn = false;
                return el;
            })
        })
    };

    return (
        <div>
            {
                stars.map((el, index) => {
                    return (
                        <div
                            onMouseOver={() => onStarOver(index, el)}
                            onMouseOut={onStarOut}
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