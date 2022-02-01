import React from "react";
import PropTypes from "prop-types";

import { useTranslation } from "react-i18next";

import { Link, useNavigate } from "react-router-dom";
import {
  useDeletePostMutation,
  useUpdatePostMutation,
} from "../services/BlogApi";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";

import { MdDeleteOutline } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
import "./Posts.css";

const Posts = ({ posts, loading }) => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const initialAuthState = useSelector((state) => state.auth.authState);
  const [updatePost] = useUpdatePostMutation();
  const [deleteBlog] = useDeletePostMutation();
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="contai-ner">
      <Helmet>
        <title>Blogs Homepage</title>
        <meta name="Blog Homepage" content="List of all the blogs." />
      </Helmet>
      {posts.map((post) => (
        <div key={post.id}>
          <Link className="link" to={`/blog/${post.id}`}>
            <h3 className="title">{post.title}</h3>
          </Link>

          {initialAuthState && (
            <div className="buttons">
              <button
                onClick={() => {
                  updatePost(post.id);
                  navigate(`/admin/edit/${post.id}`);
                }}
                className="btn1"
              >
                <AiOutlineEdit className="button2" /> {t("Edit")}
              </button>

              <button
                onClick={() => {
                  deleteBlog(post.id);
                }}
                className="btn2"
              >
                <MdDeleteOutline className="button1" />
                {t("Delete")}
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
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
