import React, { ChangeEventHandler, SetStateAction, useEffect, useState } from 'react';

import { FilterWrapper, TitleWrapper } from './styles';

import { IFilmData } from '../../interfaces/index';
import SortSelect from '../UI/SortSelect/SortSelect';
import SortSwitcher from '../SortSwitcher/SortSwitcher';

interface IFilter {
    films: IFilmData[] | undefined;
    setFilms: React.Dispatch<SetStateAction<IFilmData[]>>
};

export interface IOption {
    value: string;
    name: string;
};

const Filter: React.FC<IFilter> = ({ films, setFilms }) => {
    const [sort, setSort] = useState<string>();
    const [sortMethod, setSortMethod] = useState(false);
    const [sortTypes, setSortTypes] = useState<IOption[]>([
        {
            value: 'rating',
            name: 'По рейтингу'
        },
        {
            value: 'realeseDate',
            name: 'По году выхода'
        },
    ])

    const filter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSort(e.target.value);
    };

    useEffect(() => {
        setFilms([...films!].sort((a, b) => sortMethod ? (a[sort!]) - (b[sort!]) : (b[sort!]) - (a[sort!])));
    }, [sort, sortMethod]);

    return (
        <FilterWrapper>
            <TitleWrapper>
                Фильтр
            </TitleWrapper>
            <SortSelect 
                defaultValue='Сортировка' 
                options={sortTypes} 
                value={sort!} 
                onChange={filter} 
            />
            <SortSwitcher 
                setSortMethod={setSortMethod}
            />
        </FilterWrapper>
    );
};

export default Filter;