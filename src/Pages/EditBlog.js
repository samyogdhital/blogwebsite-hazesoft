import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

import {
  useGetAllBlogsQuery,
  useUpdatePostMutation,
} from "../services/BlogApi";

import "./EditBlog.css";

const EditBlog = () => {
  const { t } = useTranslation();

  const [data, setData] = useState({
    title: "",
    body: "",
  });

  const [updatePost, { isLoading }] = useUpdatePostMutation();
  const navigate = useNavigate();

  const { id } = useParams();
  const { data: blogData } = useGetAllBlogsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: data?.find((e) => e.id == id),
    }),
  });

  useEffect(() => {
    if (blogData) {
      setData(blogData);
    }
  }, []);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updatePost(data);

    setData({
      title: "",
      body: "",
    });
    navigate("/");
  };

  return (
    <div className="wrapper">
      <Helmet>
        <title>Edit Post</title>
        <meta name="This is the blog edit page." content="Blog editing page." />
      </Helmet>
      <div className="edit_form">
        <form onSubmit={handleSubmit}>
          <h1>{t("Edit_your_blog")}</h1>
          <div className="form-contain-er">
            <label htmlFor="Title">{t("Title")}</label>
            <input
              onChange={handleInput}
              name="title"
              value={data.title}
              type="text"
              disabled={isLoading}
            />
            <label htmlFor="Description">{t("Description")}</label>
            <textarea
              className="textArea"
              onChange={handleInput}
              value={data.body}
              name="body"
              type="text"
              disabled={isLoading}
              rows={5}
              cols={50}
            />

            <button
              type="submit"
              disabled={
                isLoading || Object.values(data).every((el) => el == "")
              }
            >
              {t("Edit_blog")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
