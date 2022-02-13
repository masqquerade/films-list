import React, { ChangeEventHandler, SetStateAction, useEffect, useState } from 'react';

import { FilterWrapper, TitleWrapper } from './styles';

import { IFilmData } from '../../interfaces/index';
import SortSelect from '../UI/SortSelect/SortSelect';

interface IFilter {
    films: IFilmData[] | undefined;
    setFilms: React.Dispatch<SetStateAction<any>>
};

export interface IOption {
    value: string;
    name: string;
};

const Filter: React.FC<IFilter> = ({ films, setFilms }) => {
    console.log(films)
    const [sort, setSort] = useState<string>();
    const [sortTypes, setSortTypes] = useState<IOption[]>([
        {
            value: 'rating',
            name: 'По рейтингу'
        },
        {
            value: 'realeseDate',
            name: 'По дате выхода'
        },
    ])

    const filter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSort(e.target.value);
    };

    useEffect(() => {
        let isMounter = true;
        try {
            if (isMounter) {
                setFilms([...films!].sort((a, b) => (a[sort!]) - (b[sort!])))
            }
        } catch (e) {
            console.log(e)
        }
        return () => { isMounter = false }
    }, [sort])

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
        </FilterWrapper>
    );
};

export default Filter;