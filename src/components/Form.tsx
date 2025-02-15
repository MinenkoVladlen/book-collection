import React from "react";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import booksStore from "../services/books/Books.store.ts";
import * as yup from "yup";
import '../styles.css';

const validationSchema = yup.object({
  name: yup.string().required("Book name is required"),
  author: yup.string().required("Author is required")
});


const Form: React.FC = () => {
    const formik = useFormik({
        initialValues: {
          name: "",
          author: ""
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
          await booksStore.addBook(values);
          formik.resetForm();
        }
      });

    return (
        <form onSubmit={formik.handleSubmit} id='Form' data-testid="form">
            <TextField
                label="Book Name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                margin="normal"
            />
            <TextField
                label="Author"
                name="author"
                value={formik.values.author}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.author && Boolean(formik.errors.author)}
                helperText={formik.touched.author && formik.errors.author}
                margin="normal"
            />
            <Button variant="contained" type="submit" sx={{margin: 'auto'}}>Add</Button>
        </form>
    )
}

export default Form;