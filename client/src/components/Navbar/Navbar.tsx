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
            label: 'Опубликовать',
            url: '/publish'
        }
    ]);

    return (
        <NavbarWrapper>
            <NavbarContent>
                {
                    buttons.map((el, idx) => {
                        return (
                            <Link 
                                to={el.url} 
                                key={idx}
                                >{el.label}
                            </Link>
                        );
                    })
                }
            </NavbarContent>
        </NavbarWrapper>
    );
};

export default Navbar;