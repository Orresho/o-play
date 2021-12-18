
export interface PanelItems {
    id: string;
    description: string;
    image: string;
    title: string;
    video: string;
}

export interface MoviesData {
    panels: [
        {
            title: string;
            items: PanelItems[]
        }
    ]

}
