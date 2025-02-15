import booksController from '../../services/books/Books.controller';
import booksRepository from '../../services/books/Books.repository';
import booksStore from '../../services/books/Books.store';

jest.mock('../../services/books/Books.repository');

describe('BooksController', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should load books', async () => {
    booksRepository.getBooks.mockResolvedValueOnce([]);
    await booksController.getBooks();
    expect(booksRepository.getBooks).toHaveBeenCalled();
  });

  it('should add a book', async () => {
    const book = { name: 'Test Book', author: 'Test Author' };
    booksRepository.addBook.mockResolvedValueOnce(true);
    await booksController.addBook(book);
    expect(booksRepository.addBook).toHaveBeenCalledWith(book);
  });

  it('should toggle showPrivate and load books', async () => {
    booksRepository.getBooks.mockResolvedValueOnce([]);
    booksRepository.getPrivateBooks.mockResolvedValueOnce([]);

    // Initial load with showPrivate = false
    await booksStore.loadBooks();
    expect(booksRepository.getBooks).toHaveBeenCalled();

    // Toggle to show private books
    await booksStore.toggleShowPrivate();
    expect(booksStore.showPrivate).toBe(true);
    expect(booksRepository.getPrivateBooks).toHaveBeenCalled();

    // Toggle back to show all books
    await booksStore.toggleShowPrivate();
    expect(booksStore.showPrivate).toBe(false);
    expect(booksRepository.getBooks).toHaveBeenCalledTimes(2);
  });
});
