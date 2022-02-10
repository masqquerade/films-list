import React, { useState } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import FilmItem from '../../components/FilmItem/FilmItem';

const Main: React.FC = () => {

    return (
        <div>
            <Navbar />
            <FilmItem />
        </div>
    );
};

export default Main;