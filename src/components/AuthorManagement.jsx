import React, { useState } from "react";
import AuthorForm from "./AuthorForm";

const initialAuthors = [
  // Example initial authors
  {
    id: 1,
    name: "Kalki Krishnamurthy",
    birthDate: "1899-09-09",
    biography: "Indian Tamil language author, best known for Kalki Navel.",
  },
];

const AuthorManagement = () => {
  const [authors, setAuthors] = useState(initialAuthors);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [selectedAuthorId, setSelectedAuthorId] = useState("");

  const handleAddAuthor = (values) => {
    setAuthors([...authors, { ...values, id: Date.now() }]);
    setSelectedAuthor(null);
    setSelectedAuthorId("");
  };

  const handleEditAuthor = (values) => {
    setAuthors(
      authors.map((author) => (author.id === values.id ? values : author))
    );
    setSelectedAuthor(null);
    setSelectedAuthorId("");
  };

  const handleDeleteAuthor = (id) => {
    setAuthors(authors.filter((author) => author.id !== id));
    setSelectedAuthor(null);
    setSelectedAuthorId("");
  };

  const handleSelectChange = (event) => {
    const authorId = event.target.value;
    setSelectedAuthorId(authorId);
    const author = authors.find((a) => a.id === Number(authorId));
    setSelectedAuthor(author || null);
  };

  return (
    <div className="container mt-4">
      <h2>Author Management</h2>
      <div className="form-group">
        <label htmlFor="authorSelect">Select Author</label>
        <select
          id="authorSelect"
          name="authorSelect"
          className="form-control"
          value={selectedAuthorId}
          onChange={handleSelectChange}
        >
          <option value="">--Select an Author--</option>
          {authors.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
      </div>
      <AuthorForm
        author={selectedAuthor}
        onSubmit={selectedAuthor ? handleEditAuthor : handleAddAuthor}
      />
      <h3 className="mt-4">Author List</h3>
      <ul className="list-group">
        {authors.map((author) => (
          <li key={author.id} className="list-group-item">
            <strong>{author.name}</strong>
            <button
              className="btn btn-danger btn-sm float-end"
              onClick={() => handleDeleteAuthor(author.id)}
            >
              Delete
            </button>
            <button
              className="btn btn-secondary btn-sm float-end me-2"
              onClick={() =>
                handleSelectChange({ target: { value: author.id } })
              }
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorManagement;
