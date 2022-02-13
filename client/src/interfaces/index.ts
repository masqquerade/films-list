export interface IFilmData {
    [key: string]: any;
    title: string;
    body: string;
    logo: string | File;
    iviLink: string;
    reviewsLink: string;
    rating?: number;
    realeseDate?: number;
    itemMargin?: string;
    sort?: any;
};