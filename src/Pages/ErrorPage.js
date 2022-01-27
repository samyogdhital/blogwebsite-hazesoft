import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  let navigate = useNavigate();

  return (
    <div>
      <h1>404</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to homepage
      </button>
    </div>
  );
};

export default ErrorPage;
