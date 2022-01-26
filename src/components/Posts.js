import React from "react";
import style from "./Posts.module.css";
import PropTypes from "prop-types";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2 className={style.loading}>Loading...</h2>;
  }

  return (
    <ul className="list-group mb-4">
      {posts.map((post) => (
        <li key={post.id} className="list-group-item">
          {post.title}
        </li>
      ))}
    </ul>
  );
};

//proptypes checking.

Posts.propTypes = {
  posts: PropTypes.array,
  loading: PropTypes.bool,
};
Posts.defaultProps = {
  loading: true,
};

export default Posts;
