var jsonParser = new JSONParser();
var bib = new Library(null, null);
jsonParser.getJSON("../src/items.json", function (input) {
    bib = Library.fromJSON(input);
    var itemContainer = document.getElementById("items");
    bib.getAll().forEach(function (item) { return item.render(itemContainer); });
});
//# sourceMappingURL=app.js.map