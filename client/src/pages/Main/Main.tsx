import React, { useState } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import FilmItem from '../../components/FilmItem/FilmItem';

import Background from '../../components/Background/Background';

const Main: React.FC = () => {
    return (
        <div>
            <Background />
            <Navbar />
            <FilmItem />
        </div>
    );
};

export default Main;