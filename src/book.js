function createTitle(title) {
  return "The " + title;
};

function buildMainCharacter(name, age, pronouns) {
  return {
    name: name,
    age: age,
    pronouns: pronouns};
};

//forEach???
function saveReview(review, array) {
  if (array.length === 0) {
    array.push(review);
  } else {
    for (i = 0; i < array.length; i++) {
      if (array[i] === review) {
        break;
      } else if (i == (array.length-1) && array[i] != review) {
        array.push(review);
      }
    }
  }
  return array
};

function calculatePageCount(title) {
  return (20 * (title.split("").length));
};

function writeBook(title, character, genre) {
  return {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre: genre
  };
};

function editBook(book) {
  book.pageCount *= .75;
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
