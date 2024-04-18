export interface Movies{
    id: string,
    title: string,
    release_date: string,
    budget: string,
    duration: string
}

export interface movieDetail {
    title : string,
    id: string,
    release_date: string,
    budget: string,
    duration: string,
    poster : URL,
    summary : string,
    producers: Array<string>,
    cinematographers: Array<string>,
    box_office: string
}
