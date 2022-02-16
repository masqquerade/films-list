import Film from '../models/Film';
import { Request } from 'express';

import { FilmData } from '../interfaces/filmInterfaces';

export default class FildService {
    static async createFilmItem(req: Request): Promise<void> {
        try {
            const data = {
                title: req.body.title,
                body: req.body.body,
                logo: req.file?.path,
                iviLink: req.body.iviLink,
                reviewsLink: req.body.reviewsLink
            }
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

    static async fetchFilmData(_id: string | string[] | undefined): Promise<FilmData | undefined | null> {
        try {
            return Film.findById({ _id });
        } catch (e) {
            console.log(e);
        };
    };
};