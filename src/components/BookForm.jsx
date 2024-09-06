import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const BookSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  author: Yup.string().required("Author is required"),
  isbn: Yup.string().required("ISBN number is required"),
  publicationDate: Yup.date()
    .required("Publication date is required")
    .nullable(),
});

const BookForm = ({ book, onSubmit }) => {
  return (
    <Formik
      initialValues={
        book || { title: "", author: "", isbn: "", publicationDate: "" }
      }
      validationSchema={BookSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <>
          <div>
            <Form>
              <div className="form-group my-2">
                <label htmlFor="title">Title</label>
                <Field
                  type="text"
                  id="title"
                  name="title"
                  className="form-control"
                />
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="form-group mt-2">
                <label htmlFor="author">Author</label>
                <Field
                  type="text"
                  id="author"
                  name="author"
                  className="form-control"
                />
                <ErrorMessage
                  name="author"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="form-group my-2">
                <label htmlFor="isbn">ISBN Number</label>
                <Field
                  type="text"
                  id="isbn"
                  name="isbn"
                  className="form-control"
                />
                <ErrorMessage
                  name="isbn"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="publicationDate">Publication Date</label>
                <Field
                  type="date"
                  id="publicationDate"
                  name="publicationDate"
                  className="form-control"
                />
                <ErrorMessage
                  name="publicationDate"
                  component="div"
                  className="text-danger"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Form>
          </div>
        </>
      )}
    </Formik>
  );
};

export default BookForm;
