import React from "react";
import "./Unauthenticated.css";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Unauthenticated = () => {
  const navigate = useNavigate();
  return (
    <div className="container_wrapper">
      <Helmet>
        <title>Unauthenticated Error</title>
        <meta
          name="Unauthenticated page to show error if protected route is entered without login."
          content="Unauthenticated Error"
        />
      </Helmet>
      <div className="edit_form">
        <h1>401</h1>
        <p>You need to be loggedin as Admin.</p>
        <button
          onClick={() => {
            navigate("/login");
          }}
        >
          Login as Admin
        </button>
      </div>
    </div>
  );
};

export default Unauthenticated;
