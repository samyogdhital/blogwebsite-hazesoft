import React from "react";
import { useState } from "react";
import "./Login.css";
import { useSelector, useDispatch } from "react-redux";
import { setAuthLoggedIn, setAuthLoggedOut } from "../services/ActionSlice";
const Login = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (login.email == "admin@admin.com" && login.password == "admin") {
      setLogin({
        email: "",
        password: "",
      });
      dispatch(setAuthLoggedIn());
      localStorage.setItem("logged", true);
    }
  };

  return (
    <div className="form">
      <form className="mt-5" onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">Please Sign In</h1>
        <div className="mb-3">
          <label className="form-label" htmlFor="emailAddress">
            Email address
          </label>
          <input
            className="form-control"
            onChange={handleChange}
            name="email"
            type="text"
            value={login.email}
            placeholder="Email Address"
          />
        </div>
        <div className="mb-3">
          <label className="sr-only" htmlFor="">
            Password
          </label>
          <input
            className="form-control"
            onChange={handleChange}
            name="password"
            type="password"
            value={login.password}
            placeholder="Enter Password"
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
