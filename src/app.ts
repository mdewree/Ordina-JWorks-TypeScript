let jsonParser = new JSONParser();

let bib: Library = new Library(null,null);


jsonParser.getJSON("../src/items.json", input => {
    
    bib = Library.fromJSON(input);

    let itemContainer: HTMLElement = document.getElementById("items");
    bib.getAll().forEach(item => item.render(itemContainer));
    
});