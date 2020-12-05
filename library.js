class Library {
  constructor(books = []) {
    this.books = books;
  }

  bookCount() {
    return this.books.length;
  };

  addBook(newBook) {
    this.books.push(newBook);
  };

  addBooks(newBooks) {
    newBooks.forEach(book => this.books.push(book));
  };

  printInventory() {
    this.books.forEach((book) => {
      const {author, title, genre} = book;
      console.log(`${title} by ${author}`);
    });
  };

};

export default Library;

// In library.js refactor the printInventory method using destructuring. 
// Inside of the callback that we're passing to forEach unpack the fields title and author from the parameter book, 
// so that they can be accessed directly via the variables title and author, 
// rather than having to access them through book.title and book.author.