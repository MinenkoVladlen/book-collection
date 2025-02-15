import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form from '../../components/Form';
import booksStore from '../../services/books/Books.store';

jest.mock('../../services/books/Books.store');

describe('Form', () => {
  beforeEach(() => {
    booksStore.books = [];
  });

    it('should render correctly', () => {
        const { asFragment } = render(<Form />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should handle form submission', () => {
        const { getByTestId } = render(<Form />);
        const form = getByTestId('form');
        const handleSubmit = jest.fn();

        form.onsubmit = handleSubmit;
        form.dispatchEvent(new Event('submit'));

        expect(handleSubmit).toHaveBeenCalled();
    });
});
