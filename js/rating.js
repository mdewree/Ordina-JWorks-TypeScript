var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Movie = /** @class */ (function (_super) {
    __extends(Movie, _super);
    function Movie(title, genre, description, age, name) {
        var _this = _super.call(this, title, genre, description) || this;
        _this.age = age;
        _this.name = name;
        return _this;
    }
    Movie.fromJSON = function (inputMovie) {
        return new Movie(inputMovie.title, inputMovie.genre, inputMovie.description, inputMovie.age, inputMovie.name);
    };
    Movie.prototype.render = function (element) {
        var article = document.createElement("article");
        article.innerHTML =
            "<h3>" + this.title + "</h3>" +
                "<p>" + this.genre + " " + this.name + " " + this.age + "</p>" +
                "<span>" + this.description + "</span>";
        element.appendChild(article);
    };
    return Movie;
}(Item));
//# sourceMappingURL=rating.js.map