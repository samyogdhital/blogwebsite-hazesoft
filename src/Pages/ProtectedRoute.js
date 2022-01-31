import React from "react";
import { Outlet } from "react-router-dom";
import Unauthenticated from "./Unauthenticated";
import { useSelector } from "react-redux";

const useAuth = () => {
  const initialAuthState = useSelector((state) => state.auth.authState);
  const user = { loggedIn: initialAuthState };
  return user && user.loggedIn;
};

const ProtectedRoute = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Unauthenticated />;
};

export default ProtectedRoute;
