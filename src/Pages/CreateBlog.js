import React, { useEffect, useState } from "react";
import "./CreateBlog.css";
import { Helmet } from "react-helmet";
import { useCreatePostMutation } from "../services/BlogApi";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CreateBlog = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const [data, setData] = useState({
    title: "",
    body: "",
  });
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [createPost, { isLoading, isSuccess }] = useCreatePostMutation();

  const titleHandler = (e) => {
    let value = e.target.value;
    setTitle(e.target.value);
    setData({ ...data, title: value });
  };
  const descHandler = (e) => {
    let value = e.target.value;
    setDesc(e.target.value);
    setData({ ...data, body: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createPost(data);

    setData({
      title: "",
      body: "",
    });
    navigate("/");
  };

  useEffect(() => {
    if (isLoading) {
      <h1>Loading..</h1>;
    }
  }, []);

  if (isSuccess) {
    return <h1>Successful..</h1>;
  }

  return (
    <div className="wrapper">
      <Helmet>
        <title>Create Blog</title>
        <meta
          name="This is the new blog creating page."
          content="Blog creating site."
        />
      </Helmet>
      <div className="edit_form">
        <form onSubmit={handleSubmit}>
          <h1>{t("Create_Blog")}</h1>
          <div className="form-contain-er">
            <label htmlFor="Title">{t("Title")}</label>
            <input
              onChange={titleHandler}
              name="title"
              value={title}
              type="text"
              disabled={isLoading}
            />
            <label htmlFor="Description">{t("Title")}</label>
            <textarea
              onChange={descHandler}
              value={desc}
              name="body"
              type="text"
              disabled={isLoading}
              rows={5}
              cols={50}
            />
            <button type="submit" disabled={isLoading}>
              {t("Submit")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
