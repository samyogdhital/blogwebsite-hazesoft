import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Admin from "./Pages/Admin";
import ErrorPage from "./Pages/ErrorPage";
import Checking from "./Pages/Checking";
import Profile from "./Pages/Profile";
import Blogs from "./components/Blogs";

function App() {
  return (
    <Router>
      {/* Place for navbar it remains constant */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/checking">Check</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/error">404</Link>
      </nav>

      <Routes>
        <Route exact path="/" element={<Blogs />} />
        <Route path="/admin/*" element={<Admin />} />
        <Route path="/checking" element={<Checking />} />
        <Route path="/profile" element={<p>This is profile Page</p>} />
        <Route path="/profile/:id" element={<Profile />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>

      {/* Place for footer */}
      <footer>This is the footer of this page.</footer>
    </Router>
  );
}

export default App;
