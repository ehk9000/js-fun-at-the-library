function createTitle(title) {
  return "The " + title;
  // Totally valid - how can you refactor with template literal? 
 };

function buildMainCharacter(key, number, pronouns) {
  var name = key
  var age = number
  return {
    name,
    age,
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
        // talk to me about this break - are there other ways to accomplish it? Could you refactor so that there is only one if block?
      } else if (i === (array.length-1) && array[i] != review) {
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
