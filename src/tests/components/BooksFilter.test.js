import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BooksFilter from '../../components/BooksFilter';
import booksStore from '../../services/books/Books.store';

jest.mock('../../services/books/Books.store');

describe('BooksFilter', () => {
  beforeEach(() => {
    booksStore.books = [];
  });

  it('should render correctly', () => {
    const { asFragment } = render(<BooksFilter />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should toggle showPrivate when button is clicked', async () => {
    const { getByText } = render(<BooksFilter />);
    fireEvent.click(getByText(/Show only private/i));
    expect(booksStore.toggleShowPrivate).toHaveBeenCalled();
  });
});