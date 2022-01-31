import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

import AdminLogin from "./Pages/AdminLogin";
import ErrorPage from "./Pages/ErrorPage";

import Blogs from "./components/Blogs";
import Blog from "./Pages/Blog";
import ProtectedRoute from "./Pages/ProtectedRoute";
import CreateBlog from "./Pages/CreateBlog";
import EditBlog from "./Pages/EditBlog";
import Login from "./Pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const initialAuthState = useSelector((state) => state.auth.authState);

  return (
    <Router>
      {/* Place for navbar it remains constant */}
      <div className="App">
        <Navbar></Navbar>
        {/* <nav>
          <Link to="/">Home |</Link>
          <Link to="/error">| 404</Link>
          <Link to="/admin">| Admin</Link>
          <Link to="/admin/edit">| Edit</Link>
          <Link to="/login">| Admin Login</Link>
        </nav> */}

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

        {/* <Route path="*" element={<ErrorPage />} /> */}

        {/* Place for footer */}
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
