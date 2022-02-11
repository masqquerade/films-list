import React from 'react';

import { BtnWrapper } from './styles';

interface IFilmDataBtn {
    title: string;
    link: string;
};

const WatchBtn: React.FC<IFilmDataBtn> = ({ title, link, }) => {
    const redirect = () => {
        window.open(link);
    };

    return (
        <BtnWrapper
            onClick={redirect}
        >
            { title } 
        </BtnWrapper>
    );
};

export default WatchBtn;