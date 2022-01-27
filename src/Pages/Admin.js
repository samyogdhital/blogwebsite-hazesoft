import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PostInput from "./PostInput";
const Admin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
  };

  const emailHandler = (e) => {
    setemail(e.target.value);
  };
  const passwordHandler = (e) => {
    setpassword(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleForm} action="">
        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={emailHandler}
            type="text"
            name="email"
            value={email}
          />
        </div>
        <div>
          <label htmlFor="email">Password</label>
          <input
            onChange={passwordHandler}
            type="password"
            name="password"
            value={password}
          />
        </div>
        <button type="submit">login</button>
      </form>
      <br />
      <br />
      <br />
      Click Here to input.
      <Link to="/admin/post">Create Post</Link>
      <Routes>
        <Route exact path="/admin/post" element={<PostInput />} />
      </Routes>
    </>
  );
};

export default Admin;
