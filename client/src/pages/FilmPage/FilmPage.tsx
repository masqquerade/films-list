import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchFilmData } from '../../hooks/filmData';

import Navbar from '../../components/Navbar/Navbar';

import FilmContent from '../../components/FilmContent/FilmContent';

import StarsList from '../../components/StarsList/StarsList';

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
            <StarsList></StarsList>
        </div>
    );
};

export default FilmPage;