import axios from 'axios';

import { IFilmData } from '../interfaces';

export const createFilmItem = async ({ title, body, logo, iviLink, trailerLink }: IFilmData): Promise<void> => {
    const file = new FormData();

    file.append('title', title);
    file.append('body', body);
    file.append('logo', logo);
    file.append('iviLink', iviLink);
    file.append('trailerLink', trailerLink);

    await axios.post('api/create-film-item', file, {
        headers: {
            'content-type': 'mulpipart/form-data'
        }
    });
};