function shelfBook(book, shelf) {
  if (shelf.length <= 2) {
    shelf.unshift(book);
  }
}

function unshelfBook(title, shelf) {
  for (i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      shelf = shelf.splice([i],1)
    }
  }
}

function listTitles(shelf) {
  var names = []
  for (i = 0; i < shelf.length; i++) {
    names.push(shelf[i].title)
  }
  return names.join(', ')
}

function searchShelf(shelf, title) {
  for (i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
      return true;
    }
  }
  return false;
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
