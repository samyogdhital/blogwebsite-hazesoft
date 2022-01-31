import React from "react";
import "./ErrorPage.css";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const ErrorPage = () => {
  let navigate = useNavigate();

  return (
    <div className="container_wrapper">
      <Helmet>
        <title>Error Page</title>
        <meta
          name="This page shows the error if wrong route is entered."
          content="Error Page"
        />
      </Helmet>
      <div className="edit_form">
        <h1>404</h1>
        <p>Page not found</p>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Back to homepage
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
