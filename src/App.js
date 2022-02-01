import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

import ErrorPage from "./Pages/ErrorPage";

import Blogs from "./components/Blogs";
import Blog from "./Pages/Blog";
import ProtectedRoute from "./Pages/ProtectedRoute";
import CreateBlog from "./Pages/CreateBlog";
import EditBlog from "./Pages/EditBlog";
import Login from "./Pages/Login";
import Navbar from "./components/Navbar";

function App() {
  const initialAuthState = useSelector((state) => state.auth.authState);

  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          {/* <Route path="/:id" element={<Blog />} /> */}
          <Route path="/" element={<Blogs />} />

          <Route
            path="/login"
            element={initialAuthState ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/blog">
            <Route path=":id" element={<Blog />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<Blogs />} />
            <Route path="/admin/edit" element={<EditBlog />}>
              <Route path=":id" element={<EditBlog />} />
            </Route>
            <Route path="/admin/create" element={<CreateBlog />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
