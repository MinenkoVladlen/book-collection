import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../../components/App';
import booksStore from '../../services/books/Books.store';

jest.mock('../../services/books/Books.store');

describe('App', () => {
  beforeEach(() => {
    booksStore.books = [];
  });

  it('should render correctly', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should load books on mount', () => {
    render(<App />);
    expect(booksStore.loadBooks).toHaveBeenCalled();
  });

});