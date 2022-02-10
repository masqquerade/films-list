import { Id } from '../types/filmTypes';

export interface FilmData extends Id<String> {
    title: String;
    body: String;
    file: any;
};