import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchFilmData } from '../../hooks/filmData';

import Navbar from '../../components/Navbar/Navbar';

import FilmContent from '../../components/FilmContent/FilmContent';

const FilmPage: React.FC = () => {
    const { id } = useParams();
    const film = useFetchFilmData(id!);

    return (
        <div>
            <Navbar />
            <FilmContent 
                title={film?.title!}
                body={film?.body!}
                fullSizeLogo={film?.fullSizeLogo!}
            />
        </div>
    );
};

export default FilmPage;