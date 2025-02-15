import booksRepository from "./Books.repository.ts";

class BooksController {
  async getBooks() {
    const books = await booksRepository.getBooks();
    return books;
  }

  async getPrivateBooks() {
    const books = await booksRepository.getPrivateBooks();
    return books;
  }

  async addBook(book) {
    const result = await booksRepository.addBook(book);
    return result;
  }

  async loadBooks(showPrivate) {
    if (showPrivate) {
      return await this.getPrivateBooks();
    } else {
      return await this.getBooks();
    }
  }
}

const booksController = new BooksController();
export default booksController;
