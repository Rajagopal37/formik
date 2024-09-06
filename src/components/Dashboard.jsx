import React from "react";
import BookManagement from "./BookMAnagement";
import AuthorManagement from "./AuthorManagement";

const Dashboard = () => (
  <>
    <div className="row d-flex justify-content-center">
      <h1 className=" text-center mt-2 border rounded border-dark bg-warning sticky  p-3">
        Library Management Dashboard
      </h1>
      <div className="col-4 border rounded border-dark p-2 m-2">
        <BookManagement />
      </div>
      <div className="col-4 border rounded border-dark  p-2 m-2 ">
        <AuthorManagement />
      </div>
    </div>
  </>
);

export default Dashboard;
