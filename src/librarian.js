class Librarian {
  constructor(name, library) {
    this.name = name,
    this.library = library
  };

  greetPatron(name, morning) {
    if (morning === true) {
      return `Good morning, ${name}!`
    } else {
      return `Hello, ${name}!`
    }
  };

  findBook(book) {
    for (var i = 0; i < (Object.keys(this.library.shelves).length); i++) {
      var key = (Object.keys(this.library.shelves)[i])
      for (var j = 0; j < (Object.keys(this.library.shelves)[i]).length; j++) {
        if (this.library.shelves[key][j].title == book) {
          this.library.shelves[key].splice(j,1);
          return `Yes, we have ${book}`
        } else {
          return `Sorry, we do not have ${book}`
        }
      }
    }
  };

  calculateLateFee(num) {
    return Math.ceil(num * 0.25)
  };

};

module.exports = Librarian;
