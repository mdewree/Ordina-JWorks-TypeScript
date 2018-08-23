var Library = /** @class */ (function () {
    function Library(movies, books) {
        this.movies = [];
        this.books = [];
        this.itemContainer = document.getElementById("items");
        this.items = [];
        this.movies = movies;
        this.books = books;
    }
    Library.prototype.getAll = function () {
        this.items = this.movies.concat(this.books);
        return this.items;
    };
    Library.prototype.addMovie = function () {
        var hungerGames = new Movie('The Hunger Games', 'Action', 'Elkander een beetje afmaken.', 16, 'PG');
        this.items.push(hungerGames);
        hungerGames.render(this.itemContainer);
    };
    Library.prototype.addBook = function () {
        var cleanCode = new Book('Clean Code', new Author('Robert C. Martin'), 'Fantasy', 'Dirty Code Is No Fun!');
        this.items.push(cleanCode);
        cleanCode.render(this.itemContainer);
    };
    Library.fromJSON = function (input) {
        var mvs = input.movies.map(function (movie) { return Movie.fromJSON(movie); });
        var bks = input.books.map(function (book) { return Book.fromJSON(book); });
        return new Library(mvs, bks);
    };
    return Library;
}());
//# sourceMappingURL=library.js.map