import React from 'react';
import { Link } from 'react-router-dom';

import { FilmTextWrapper, FilmWrapper } from './styles';
import { IFilmData } from '../../interfaces';
import FilmNotFound from '../FilmNotFound/FilmNotFound';

const FilmItem: React.FC<IFilmData> = ({ title, body, logo, iviLink, reviewsLink, genre, filmMargin }) => {
    return (
        <Link to={'a'}>
            <FilmWrapper
                margin={filmMargin}
            >
                {
                    logo
                        ? <img
                            src={`http://localhost:5000/${logo}`}
                        />

                        : <FilmNotFound
                            label='Фото не найдено.'
                        />
                }

                <FilmTextWrapper>
                    {
                        title
                            ? <h3>{title}</h3>
                            : <h3>Не найдено.</h3>
                    }
                    {
                        genre
                            ? <h4>{genre}</h4>
                            : <h4>Не найдено.</h4>
                    }
                </FilmTextWrapper>
            </FilmWrapper>
        </Link>
    );
};

export default FilmItem;