import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import FilmsList from '../../components/FilmsList/FilmsList';
import './styles/index.module.css';

import { FilmsWrapper } from './styles';

const Main: React.FC = () => {
    return (
        <div>
            <Navbar />
            <FilmsWrapper>
                <FilmsList />
            </FilmsWrapper>
        </div>
    );
};

export default Main;