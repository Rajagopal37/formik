import React from "react";
import BookManagement from "./BookMAnagement";
import AuthorManagement from "./AuthorManagement";

const Dashboard = () => (
  <div className="container mt-4">
    <h1>Library Management Dashboard</h1>
    <div className="d-flex justify-content-center align-items-center">
      <BookManagement />
      <AuthorManagement />
    </div>
  </div>
);

export default Dashboard;
