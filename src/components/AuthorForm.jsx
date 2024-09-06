import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AuthorSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  birthDate: Yup.date().required("Birth date is required").nullable(),
  biography: Yup.string().required("Biography is required"),
});

const AuthorForm = ({ author, onSubmit }) => {
  return (
    <Formik
      initialValues={author || { name: "", birthDate: "", biography: "" }}
      validationSchema={AuthorSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" className="form-control" />
            <ErrorMessage name="name" component="div" className="text-danger" />
          </div>
          <div className="form-group">
            <label htmlFor="birthDate">Birth Date</label>
            <Field
              type="date"
              id="birthDate"
              name="birthDate"
              className="form-control"
            />
            <ErrorMessage
              name="birthDate"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="form-group">
            <label htmlFor="biography">Biography</label>
            <Field
              as="textarea"
              id="biography"
              name="biography"
              className="form-control"
            />
            <ErrorMessage
              name="biography"
              component="div"
              className="text-danger"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AuthorForm;
