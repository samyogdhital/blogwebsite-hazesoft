import React from "react";
import "./Blog.css";

import { useParams } from "react-router-dom";
import { useGetAllBlogsQuery } from "../services/BlogApi";
import { Helmet } from "react-helmet";

const Blog = () => {
  const { id } = useParams();

  const { data } = useGetAllBlogsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: data?.find((e) => e.id == id),
    }),
  });

  return (
    <div>
      <Helmet>
        <title>{data.title}</title>
        <meta name="Blog Page" content={data.body} />
      </Helmet>
      {data == undefined ? (
        <div>Data is Loading...</div>
      ) : (
        <div className="container_wrapper">
          <div className="container_wrap">
            <h1 className="container_title">{data.title}</h1>
            <div className="container_body">{data.body}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
