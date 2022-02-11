import React from 'react';

import { FilmWrapper, FilmItemsWrapper, FilmBtnWrapper } from './styles';
import FilmItemBtn from '../UI/FilmItemBtn/FilmItemBtn';
import { IFilmData } from '../../interfaces';

const FilmItem: React.FC<IFilmData> = ({ title, body, logo, iviLink, reviewsLink, itemMargin }) => {
    return (
        <FilmWrapper
            margin={itemMargin as string}
        >
            <img src={`http://localhost:5000/${logo}`} />

            <FilmItemsWrapper>
                <h2>{title}</h2>
                <h4>{body}</h4>

                <FilmBtnWrapper>
                    <FilmItemBtn title={'Смотреть'} link={iviLink} />
                    <FilmItemBtn title={'Рецензии'} link={reviewsLink} />
                </FilmBtnWrapper>
            </FilmItemsWrapper>
        </FilmWrapper>
    );
};

export default FilmItem;