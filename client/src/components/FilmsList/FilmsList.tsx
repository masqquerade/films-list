import React from 'react';

import FilmItem from '../FilmItem/FilmItem';
import { useFetchFilmsData } from '../../hooks/filmData';
import { FilterWrapper, ListWrapper, Wrapper } from './styles/index';
import Filter from '../Filter/Filter';

const FilmsList: React.FC = () => {
    const { films, setFilms } = useFetchFilmsData();

    return (
        <div>
            <FilterWrapper>
                {
                    films &&
                    <Filter
                        films={films}
                        setFilms={setFilms}
                    />
                }
            </FilterWrapper>

            <Wrapper>
                <ListWrapper>
                    {
                        films &&
                        films.map((el, index) => {
                            return <FilmItem
                                title={el.title}
                                body={el.body}
                                logo={el.logo}
                                iviLink={el.iviLink}
                                reviewsLink={el.reviewsLink}
                                genre={el.genre}
                                filmMargin={'2vh 1.5vw 1.5vh 0'}
                                filmId={el._id}
                                key={index}
                            />
                        })
                    }
                </ListWrapper>
            </Wrapper>
        </div>
    );
};

export default FilmsList;