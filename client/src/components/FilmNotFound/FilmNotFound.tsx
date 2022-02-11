import React from 'react';

import { NotFoundWrapper } from './styles/index';

type IFilmNotFound = {
    label: string;
};

const FilmNotFound: React.FC<IFilmNotFound> = ({ label }): JSX.Element => {
    return (
        <NotFoundWrapper>
            { label }            
        </NotFoundWrapper>
    );
};

export default FilmNotFound;