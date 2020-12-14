function createLibrary(name) {
  return {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  }
};
/*
//Original function, stopped using for...in and made a for loop
function addBook(library, book) {
  for (var key in library.shelves) {
    if (key == book.genre) {
      library.shelves[key].push(book)
    }
  }
};
*/

function addBook(library, book) {
  for (i = 0; i < (Object.keys(library.shelves).length); i++) {
    if (book.genre === (Object.keys(library.shelves)[i])) {
      library.shelves[(Object.keys(library.shelves)[i])].push(book)
    }
  }
}
// can pull out Object.keys(library.shelves into variable. Is there a way to refactor using bracket notation and not object.keys? 

function checkoutBook(library, book, genre) {
  for (i = 0; i < library.shelves[genre].length; i++) {
    if (book === library.shelves[genre][i].title) {
      library.shelves[genre].splice(i, 1)
      return `You have now checked out ${book} from the ${library.name}`
    }
  }
  return `Sorry, there are currently no copies of ${book} available at the ${library.name}`
};

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
