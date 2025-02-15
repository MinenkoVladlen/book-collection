import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Book from '../../components/Book';
import booksStore from '../../services/books/Books.store';

jest.mock('../../services/books/Books.store');

describe('Book', () => {
   const book = {
      name: 'Test Book',
      author: 'Test Author',
    }

    it('should render correctly', () => {
        const { asFragment } = render(<Book book={book} />);
        expect(asFragment()).toMatchSnapshot();
    });
});