import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { Box, Divider, Grid2, List } from "@mui/material";
import booksStore from "../services/books/Books.store.ts";
import Book from "./Book.tsx";
import Form from "./Form.tsx";
import BooksFilter from "./BooksFilter.tsx";
import "../styles.css";

const App = observer(() => {

  useEffect(() => {
    booksStore.loadBooks();
  }, []);

  return (
    <Box className='container'>
      <BooksFilter />
      <Grid2 mb={1}>
        <List>
          {booksStore.books.map((book, i) => <Book key={i} book={book} />)}
        </List>
        <Divider />
      </Grid2>
      <Form />
    </Box>
  );
});

const ObservedApp = App;

export default ObservedApp;
