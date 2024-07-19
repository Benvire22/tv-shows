
export interface Show {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[],
    status: string;
    runtime: number;
    averageRuntime: number;
    premiered: string;
    ended: string;
    officialSite: string,
}

export interface ShowInfo {
    score: number;
    show: Show,
}
