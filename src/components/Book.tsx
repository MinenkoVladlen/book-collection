import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { Book as BookIcon } from '@mui/icons-material';

interface BookProps {
    book: {
        name: string;
        author: string;
    }
}

const Book: React.FC<BookProps> = ({ book }) => {
    return (
        <ListItem>
            <ListItemAvatar >
                <Avatar>
                    <BookIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={book.name} secondary={book.author} />
        </ListItem>
    )
}

export default Book;