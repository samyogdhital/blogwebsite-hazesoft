import React from "react";
import { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { setAuthLoggedIn } from "../services/ActionSlice";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [logged, setLogged] = useState(true);

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
      setLogged(true);

      localStorage.setItem("logged", true);
    }
    if (login.email !== "admin@admin.com" || login.password !== "admin") {
      setLogged(false);
    }
  };

  return (
    <div className="form">
      <form className="mt-5" onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 font-weight-normal">{t("Please Sign In")}</h1>
        <div className="mb-3">
          <label className="form-label" htmlFor="emailAddress">
            {t("Email address")}
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
            {t("Password")}
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
          {t("Login")}
        </button>
      </form>
      {!logged && <h1 className="login_error">Error Email or Password. </h1>}
    </div>
  );
};

export default Login;
