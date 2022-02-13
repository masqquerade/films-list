import React from 'react';

import FilmItem from '../FilmItem/FilmItem';
import { useFetchFilmsData } from '../../hooks/filmData';
import { FilterWrapper } from './styles/index';
import Filter from '../Filter/Filter';

const FilmsList: React.FC = () => {
    const { films, setFilms } = useFetchFilmsData();

    return (
        <div>
            <FilterWrapper>
                {
                    films && <Filter
                        films={films}
                        setFilms={setFilms}
                    />
                }
            </FilterWrapper>

            {
                films &&
                films.map((el, index) => {
                    return <FilmItem
                        title={el.title}
                        body={el.body}
                        logo={el.logo}
                        iviLink={el.iviLink}
                        reviewsLink={el.reviewsLink}
                        key={index}
                    />
                })
            }
        </div>
    );
};

export default FilmsList;