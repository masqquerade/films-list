import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { NavbarWrapper, NavbarContent } from './styles';

interface IButtons {
    label: string;
    url: string;
};

const Navbar: React.FC = () => {
    const [buttons, setButtons] = useState<IButtons[]>([
        {
            label: 'Главная',
            url: '/'
        },
        {
            label: 'На пике',
            url: '/peak'
        },
        {
            label: 'Лучшее',
            url: '/best'
        }
    ]);

    return (
        <NavbarWrapper>
            <NavbarContent>
                {
                    buttons.map(el => {
                        return <Link to={el.url}>{el.label}</Link>
                    })
                }
            </NavbarContent>
        </NavbarWrapper>
    );
};

export default Navbar;