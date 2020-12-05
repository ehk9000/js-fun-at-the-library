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

function addBook(library, book) {
  for (var key in library.shelves) {
    if (key == book.genre) {
      library.shelves[key].push(book)
    }
  }
};

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
