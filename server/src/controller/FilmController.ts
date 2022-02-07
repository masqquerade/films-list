import { Request, Response } from 'express';
import { FilmData } from '../interfaces/filmInterfaces';

import FilmService from '../service/FilmService';

export default class FilmController {
    static async createFilmItem(req: Request, res: Response): Promise<Response> {
        await FilmService.createFilmItem(req.body);
        return res.json('Succesfully completed.').status(200);
    };
};