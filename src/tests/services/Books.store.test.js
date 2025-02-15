import booksStore from '../../services/books/Books.store';
import booksRepository from '../../services/books/Books.repository';

jest.mock('../../services/books/Books.repository');

describe('BooksStore', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should load books', async () => {
    const books = [{ name: 'Test Book', author: 'Test Author' }];
    booksRepository.getBooks.mockResolvedValueOnce(books);
    await booksStore.loadBooks();
    expect(booksStore.books).toEqual(books);
  });

  it('should add a book', async () => {
    const book = { name: 'Test Book', author: 'Test Author' };
    booksRepository.addBook.mockResolvedValueOnce(true);
    booksRepository.getBooks.mockResolvedValueOnce([book]);
    await booksStore.addBook(book);
    expect(booksStore.books).toEqual([book]);
  });

  it('should toggle showPrivate and load books', async () => {
    const publicBooks = [{ name: 'Public Book', author: 'Author' }];
    const privateBooks = [{ name: 'Private Book', author: 'Author' }];

    booksRepository.getBooks.mockResolvedValueOnce(publicBooks);
    booksRepository.getPrivateBooks.mockResolvedValueOnce(privateBooks);

    // Initial load with showPrivate = false
    await booksStore.loadBooks();
    expect(booksStore.books).toEqual(publicBooks);

    // Toggle to show private books
    booksRepository.getPrivateBooks.mockResolvedValueOnce(privateBooks);
    await booksStore.toggleShowPrivate();
    await new Promise(resolve => process.nextTick(resolve)); // Wait for the next event loop tick
    expect(booksStore.showPrivate).toBe(true);
    expect(booksStore.books).toEqual(privateBooks);

    // Toggle back to show all books
    booksRepository.getBooks.mockResolvedValueOnce(publicBooks);
    await booksStore.toggleShowPrivate();
    await new Promise(resolve => process.nextTick(resolve)); // Wait for the next event loop tick
    expect(booksStore.showPrivate).toBe(false);
    expect(booksStore.books).toEqual(publicBooks);
  });
});