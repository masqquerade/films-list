import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import FilmsList from '../../components/FilmsList/FilmsList';
import Filter from '../../components/Filter/Filter';
import Footer from '../../components/Footer/Footer';

import { Wrapper } from '../../styles/PageWrapper';
import { FilmsWrapper } from './styles';

const Main: React.FC = () => {
    return (
        <Wrapper>
            <Navbar />
            <FilmsWrapper>
                <FilmsList />
            </FilmsWrapper>
            <Footer></Footer>
        </Wrapper>
    );
};

export default Main;