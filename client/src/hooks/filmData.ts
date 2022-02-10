import { useEffect, useState, useCallback } from 'react';
import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/';

export const useFetchFilmsData = () => {
    const [films, setFilms] = useState<AxiosResponse>();

    const fetchData = useCallback(async (): Promise<void> => {
        await axios.get('api/fetch-all-films')
            .then((res) => setFilms(res.data));
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return films;
};