export interface IFilmData {
    [key: string]: any;
    title: string;
    body: string;
    logo: string;
    genre: string;
    iviLink: string;
    reviewsLink: string;
    fullSizeLogo: string;
    rating?: number;
    realeseDate?: number;
    itemMargin?: string;
    sort?: any;
};

export interface ICommentData {
    filmId: string;
    body: string;
    stars: number;
};