class Library {
    public movies: Array<Movie> = [];
    public books: Array<Book> = [];
    itemContainer: HTMLElement = document.getElementById("items");

    items: Array<Item> = [];

    constructor(movies, books){
        this.movies = movies;
        this.books = books;
    }

    getAll(): Array<Item>{
        this.items = (<Item[]>this.movies).concat(this.books);
        return this.items;
    }

    public addMovie(){
        let hungerGames: Movie = new Movie('The Hunger Games', 'Action',
            'Elkander een beetje afmaken.', 16, 'PG');
        this.items.push(hungerGames);
        hungerGames.render(this.itemContainer);
    }

    public addBook(){
        let cleanCode: Book = new Book('Clean Code',
            new Author('Robert C. Martin'), 'Fantasy', 'Dirty Code Is No Fun!');
        this.items.push(cleanCode);
        cleanCode.render(this.itemContainer);
    }

    static fromJSON(input: any): Library{
        let mvs: Array<Movie> = input.movies.map(movie => Movie.fromJSON(movie));
        let bks: Array<Book> = input.books.map(book => Book.fromJSON(book));
        return new Library(mvs, bks);
    }
}
