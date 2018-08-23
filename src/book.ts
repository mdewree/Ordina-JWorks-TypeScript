class Book extends Item {
    author:Author;
    constructor(title:string,author:Author,genre:string,description:string){
        super(title,genre,description)
        this.author = author;
    }

    static fromJSON(inputBook: any): Book{
        return new Book(inputBook.title, new Author(inputBook.author), inputBook.genre, inputBook.description);
    }

    render(element: HTMLElement):void {
        let article: HTMLElement = document.createElement("article");
        article.innerHTML =
            "<h3>" + this.title + "</h3>" +
            "<h4>" + this.author.name + "</h4>" +
            "<p>" + this.genre + "</p>" +
            "<span>" + this.description + "</span>";

        element.appendChild(article);
    }
}