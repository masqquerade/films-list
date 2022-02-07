import Film from '../models/Film';
import mongoose from 'mongoose';

import { FilmData } from '../interfaces/filmInterfaces';

export default class FildService {
    static async createFilmItem(data: FilmData): Promise<void> {
       await Film.create(data);
    };
};