import React, { useState } from "react";
import BookForm from "./BookForm";

const initialBooks = [
  // Example initial books
  {
    id: 1,
    title: "Ponniyin Selvan",
    author: "	Kalki Krishnamurthy",
    isbn: "	9789672811275",
    publicationDate: "1950-10-29",
  },
];

const BookManagement = () => {
  const [books, setBooks] = useState(initialBooks);
  const [selectedBook, setSelectedBook] = useState(null);
  const [selectedBookId, setSelectedBookId] = useState("");

  const handleAddBook = (values) => {
    setBooks([...books, { ...values, id: Date.now() }]);
    setSelectedBook(null);
    setSelectedBookId("");
  };

  const handleEditBook = (values) => {
    setBooks(books.map((book) => (book.id === values.id ? values : book)));
    setSelectedBook(null);
    setSelectedBookId("");
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
    setSelectedBook(null);
    setSelectedBookId("");
  };

  const handleSelectChange = (event) => {
    const bookId = event.target.value;
    setSelectedBookId(bookId);
    const book = books.find((b) => b.id === Number(bookId));
    setSelectedBook(book || null);
  };

  return (
    <div className="container mt-4">
      <h2>Book Management</h2>
      <div className="form-group my-2">
        <label htmlFor="bookSelect">Select Book</label>
        <select
          id="bookSelect"
          name="bookSelect"
          className="form-control"
          value={selectedBookId}
          onChange={handleSelectChange}
        >
          <option value="">--Select a Book--</option>
          {books.map((book) => (
            <option key={book.id} value={book.id}>
              {book.title}
            </option>
          ))}
        </select>
      </div>
      <BookForm
        book={selectedBook}
        onSubmit={selectedBook ? handleEditBook : handleAddBook}
      />
      <h3 className="mt-4">Book List</h3>
      <ul className="list-group">
        {books.map((book) => (
          <li key={book.id} className="list-group-item">
            <strong>{book.title}</strong> by {book.author}
            <button
              className="btn btn-danger btn-sm float-end"
              onClick={() => handleDeleteBook(book.id)}
            >
              Delete
            </button>
            <button
              className="btn btn-secondary btn-sm float-end me-2"
              onClick={() => handleSelectChange({ target: { value: book.id } })}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookManagement;
