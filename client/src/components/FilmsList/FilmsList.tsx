import React from 'react';

import FilmItem from '../FilmItem/FilmItem';
import { useFetchFilmsData, useCreateFilmItem } from '../../hooks/filmData';

import { IFilmData } from '../../interfaces';

const FilmsList: React.FC = () => {
    const films: IFilmData[] | undefined = useFetchFilmsData();

    return (
        <div>
            {
                films?.map((el, index) => {
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