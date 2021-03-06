import { Request, Response } from 'express';

import FilmService from '../service/FilmService';

import { Id } from '../types/id';
import { FilmData } from '../interfaces/filmInterfaces';

export default class FilmController {
    static async createFilmItem(req: Request, res: Response): Promise<Response> {
        await FilmService.createFilmItem(req);
        return res.json('Succesfully completed.').status(200);
    };

    static async deleteFilmItem(req: Request, res: Response): Promise<Response> {
        const { _id }: Id<String> = req.body;
        await FilmService.deleteFilmItem(_id)
        return res.json('Succesfully completed.').status(200);
    };

    static async changeFilmData(req: Request, res: Response): Promise<Response> {
        const { _id }: Id<String> = req.body;
        const { data } = req.body;
        await FilmService.changeFilmData(_id, data);
        return res.json('Succesfully completed.').status(200);
    };

    static async fetchAllFilms(req: Request, res: Response): Promise<Response> {
        const data: Array<FilmData> = await FilmService.fetchAllFilms();
        return res.send(data).status(200);
    };

    static async fetchFilmData(req: Request, res: Response): Promise<Response> {
        const _id = req.headers._id;
        const data: FilmData | undefined | null = await FilmService.fetchFilmData(_id);
        return res.send(data).status(200);
    };
};