import { makeAutoObservable } from "mobx";
import booksRepository from "./Books.repository.ts";
import booksController from "./Books.controller.ts";

class BooksStore {
  books = [];
  showPrivate = false;

  constructor() {
    makeAutoObservable(this);
  }

  async loadBooks() {
    this.books = await booksController.loadBooks(this.showPrivate);
  }

  toggleShowPrivate() {
    this.showPrivate = !this.showPrivate;
    this.loadBooks();
  }

  async addBook(book) {
    await booksRepository.addBook(book);
    await this.loadBooks();
  }
}

const booksStore = new BooksStore();
export default booksStore;
