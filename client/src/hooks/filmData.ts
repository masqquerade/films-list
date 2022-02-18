import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import { IFilmData } from '../interfaces/index';

axios.defaults.baseURL = 'http://localhost:5000/';

export const useFetchFilmsData = () => {
    const [films, setFilms] = useState<IFilmData[]>();

    const fetchData = useCallback(async (): Promise<void> => {
        await axios.get('api/fetch-all-films')
            .then(res => setFilms(res.data));
    }, []);

    useEffect(() => {
        fetchData();
    }, []);

    return { films, setFilms };
};

export const useCreateFilmItem = async ({ title, body, logo, iviLink, trailerLink, fullSizeLogo }: IFilmData): Promise<void> => {
    const file = new FormData();

    file.append('title', title);
    file.append('body', body);
    file.append('logo', logo);
    file.append('iviLink', iviLink);
    file.append('trailerLink', trailerLink);
    file.append('fullSizeLogo', fullSizeLogo!);

    await axios.post('api/create-film-item', file, {
        headers: {
            'content-type': 'mulpipart/form-data'
        }
    });
};

export const useFetchFilmData = (_id: string) => {
    const [film, setFilm] = useState<IFilmData>();

    const fetchData = useCallback(async () => {
        await axios.get('api/fetch-film-data', {
            headers: {
                '_id': _id
            }
        })
            .then(res => setFilm(res.data));
    }, []);

    useEffect(() => {
        fetchData();
    }, []);

    return film;
};