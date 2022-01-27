import React from "react";
import { useState } from "react";

const PostInput = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handlePost = (e) => {
    e.preventDefault();
  };

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };
  return (
    <>
      <form onSubmit={handlePost} action="">
        <div>
          <label htmlFor="Title">Title</label>
          <input
            onChange={titleHandler}
            type="text"
            name="email"
            value={title}
          />
        </div>
        <div>
          <label htmlFor="email">Description</label>
          <input
            onChange={descriptionHandler}
            type="text"
            name="Description"
            value={description}
          />
        </div>
        <button type="submit">Post</button>
      </form>
    </>
  );
};

export default PostInput;
