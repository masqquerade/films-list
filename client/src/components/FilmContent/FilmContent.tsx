import React from 'react';

import { ContentWrapper, TextWrapper, ButtonsWrapper } from './styles/index';
import FilmItemButton from '../UI/FilmItemBtn/FilmItemBtn';

interface IFilmContent {
    title: string;
    body: string;
    logo: string;
    trailerLink: string;
    iviLink: string;
};

const FilmContent: React.FC<IFilmContent> = ({ title, body, logo, trailerLink, iviLink }) => {
    return (
        <div>
            <ContentWrapper>
                <img src={`http://localhost:5000/${logo}`} />

                <TextWrapper>
                    <h1>{title}</h1>
                    <h4>{body}</h4>
                </TextWrapper>

            </ContentWrapper>
            
            <ButtonsWrapper>
                <FilmItemButton
                    title={'Трейлер'}
                    link={trailerLink}
                />

                <FilmItemButton
                    title={'Смотреть'}
                    link={iviLink}
                />
            </ButtonsWrapper>

        </div>
    );
};

export default FilmContent;