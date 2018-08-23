interface Rating {
    name: string;
    age: number;
}

class Movie extends Item implements Rating{

    age:number;
    name:string;

    constructor(title:string, genre:string, description:string, age:number, name:string){
        super(title, genre, description);
        this.age = age;
        this.name = name;
    }

    static fromJSON(inputMovie: any): Movie{
        return new Movie(inputMovie.title, inputMovie.genre, inputMovie.description, inputMovie.age, inputMovie.name);
    }

    render(element: HTMLElement):void {
        let article: HTMLElement = document.createElement("article");
        article.innerHTML =
            "<h3>" + this.title + "</h3>" +
            "<p>" + this.genre + " "+ this.name +" "+this.age+ "</p>" +
            "<span>" + this.description + "</span>";

        element.appendChild(article);
    }
}