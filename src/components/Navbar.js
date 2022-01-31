import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthLoggedOut } from "../services/ActionSlice";
import { useNavigate, Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const initialAuthState = useSelector((state) => state.auth.authState);
  const dispatch = useDispatch();

  let navigate = useNavigate();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 ">
        <div className="container-fluid">
          <a
            onClick={() => {
              navigate("/");
            }}
            className="navbar-brand"
          >
            Blog Website
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon light "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {initialAuthState && (
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    onClick={() => {
                      navigate("/admin/create");
                    }}
                  >
                    Create Post
                  </a>
                </li>
              )}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page"></a>
              </li>
            </ul>

            {initialAuthState ? (
              <button
                onClick={() => {
                  localStorage.setItem("logged", false);
                  if (initialAuthState) {
                    dispatch(setAuthLoggedOut());
                  }
                  navigate("/");
                }}
                className="btn btn-outline-success"
                type="submit"
              >
                {initialAuthState ? "Log Out" : "Admin Login"}
              </button>
            ) : (
              <button
                onClick={() => {
                  navigate("/login");
                }}
                className="btn btn-outline-success"
                type="submit"
              >
                {initialAuthState ? "Log Out" : "Admin Login"}
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
