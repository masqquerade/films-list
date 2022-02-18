import { Id } from '../types/id';

export interface FilmData extends Id<String> {
    title: String;
    body: String;
    file?: File;
};