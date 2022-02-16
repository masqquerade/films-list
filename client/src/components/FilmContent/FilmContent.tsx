import React from 'react';

import { ContentWrapper, TextWrapper } from './styles/index';

interface IFilmContent {
    title: string;
    body: string;
    fullSizeLogo: string;
};

const FilmContent: React.FC<IFilmContent> = ({ title, body, fullSizeLogo }) => {
    return (
        <ContentWrapper>
            <img src={`http://localhost:5000/${fullSizeLogo}`} />

            <TextWrapper>
                <h1>{title}</h1>
                <h4>{body}</h4>
            </TextWrapper>
        </ContentWrapper>
    );
};

export default FilmContent;