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
      console.log(`${book.title} by ${book.author}`);
    });
  };

};

export default Library;