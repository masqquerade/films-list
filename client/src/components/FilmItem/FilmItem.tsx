import React from 'react';

import { FilmWrapper, FilmItemsWrapper, FilmBtnWrapper, FilmTextWrapper } from './styles';
import FilmItemBtn from '../UI/FilmItemBtn/FilmItemBtn';
import { IFilmData } from '../../interfaces';
import FilmNotFound from '../FilmNotFound/FilmNotFound';

const FilmItem: React.FC<IFilmData> = ({ title, body, logo, iviLink, reviewsLink, itemMargin }) => {
    return (
        <FilmWrapper
            margin={itemMargin as string}
        >
            {
                logo
                    ? <img src={`http://localhost:5000/${logo}`} />
                    : <FilmNotFound label='Фото не найдено.' />
            }

            <FilmItemsWrapper>
                <FilmTextWrapper>
                    <h2>{title}</h2>
                    <h4>{body}</h4>
                </FilmTextWrapper>

                <FilmBtnWrapper>
                    <FilmItemBtn title={'Смотреть'} link={iviLink} />
                    <FilmItemBtn title={'Рецензии'} link={reviewsLink} />
                </FilmBtnWrapper>
            </FilmItemsWrapper>
        </FilmWrapper>
    );
};

export default FilmItem;