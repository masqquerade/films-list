import Film from '../models/Film';

import { FilmData } from '../interfaces/filmInterfaces';

export default class FildService {
    static async createFilmItem(data: FilmData): Promise<void> {
        try {
            await Film.create(data);
        } catch (e) {
            throw e;
        }
    };

    static async deleteFilmItem(_id: String): Promise<void> {
        try {
            await Film.deleteOne({ _id });
        } catch (e) {
            throw e;
        };
    };

    static async changeFilmData(_id: String, data: Object): Promise<void> {
        try {
            await Film.updateOne({ _id }, { '$set': { ...data } });
        } catch (e) {
            throw e;
        };
    };

    static async fetchAllFilms(): Promise<Array<FilmData>> {
        try {
            return await Film.find();
        } catch (e) {
            throw e;
        };
    };
};