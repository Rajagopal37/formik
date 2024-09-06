import React from "react";
import BookManagement from "./BookMAnagement";
import AuthorManagement from "./AuthorManagement";

const Dashboard = () => (
  <>
    <div className="row d-flex justify-content-center">
      <h1 className="text-center border rounded border-dark w-75  p-3">
        Library Management Dashboard
      </h1>
      <div className="col-4">
        <BookManagement />
      </div>
      <div className="col-4">
        <AuthorManagement />
      </div>
    </div>
  </>
);

export default Dashboard;
