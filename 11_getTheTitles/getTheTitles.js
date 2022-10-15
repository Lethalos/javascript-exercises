const getTheTitles = function (books) {
  const bookNames = [];
  books.forEach((book) => {
    bookNames.push(book.title);
  });
  return bookNames;
};

// Do not edit below this line
module.exports = getTheTitles;
