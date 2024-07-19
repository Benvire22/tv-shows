export interface ImageShow {
    medium: string;
    original: string;
}

export interface ShowRating {
    average: string;
}

export interface ShowInfo {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[],
    status: string;
    runtime: number;
    averageRuntime: number;
    weight: number;
    premiered: string;
    ended: string;
    officialSite: string,
    image: ImageShow;
    rating: ShowRating;
    summary: string;
}

export interface Show {
    score: number;
    show: ShowInfo,
}
