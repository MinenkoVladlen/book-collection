import { Box, FormControlLabel, Switch, Typography } from '@mui/material';
import React from 'react';
import booksStore from '../services/books/Books.store.ts';

const BooksFilter: React.FC = () => {

    const handleChange = (e) => {
        booksStore.toggleShowPrivate()
    }

    const {showPrivate} = booksStore;

    return (
        <Box className='header'>
            <FormControlLabel 
                control={<Switch checked={showPrivate} onChange={handleChange} />} 
                label="Show only private" 
            />
            <Typography variant='body1'>Total Books: {booksStore.books.length}</Typography>
        </Box>
    )
}

export default BooksFilter;