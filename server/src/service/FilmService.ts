import Film from '../models/Film';

import { FilmData } from '../interfaces/filmInterfaces';

export default class FildService {
    static async createFilmItem(data: FilmData): Promise<void> {
       await Film.create(data);
    };

    static async deleteFilmItem(_id: String): Promise<void> {
        await Film.deleteOne({ _id });
    };

    static async changeFilmData(_id: String, data: Object): Promise<void> {
        await Film.updateOne({ _id }, { '$set': { ...data } });
    };
};