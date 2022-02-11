import React, { useState, useEffect } from 'react';
import { useCreateFilmItem } from '../../hooks/filmData';

import Navbar from '../../components/Navbar/Navbar';
import FilmsList from '../../components/FilmsList/FilmsList';

import { Wrapper } from '../../styles/PageWrapper';
import { FilmsWrapper } from './styles';

const Main: React.FC = () => {
    return (
        <Wrapper>
            <Navbar />
            <FilmsWrapper>
                <FilmsList />
            </FilmsWrapper>
        </Wrapper>
    );
};

export default Main;