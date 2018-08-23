abstract class Item {
    genre: string;
    title: string;
    description: string;
    constructor(genre: string, title: string, description: string) {
        this.genre = genre;
        this.title = title;
        this.description = description;
    }
    abstract render(HTML: HTMLElement): void;
}