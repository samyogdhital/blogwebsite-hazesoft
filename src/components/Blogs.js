import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useGetAllBlogsQuery } from "../services/BlogApi";
import { useTranslation } from "react-i18next";

import { Helmet } from "react-helmet";

import Pagination from "./Pagination";
import Posts from "./Posts";
import "./Blogs.css";

const Blogs = () => {
  const { t } = useTranslation();
  const { data, isFetching } = useGetAllBlogsQuery();

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data?.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Helmet>
        <title>Blogs Homepage</title>
        <meta
          name="All the latest news and contents."
          content="Latest Blogs and news."
        />
      </Helmet>
      <div className="contnr mt-3">
        <h1 className="blog mb-3">{t("Blogs")}</h1>
        <h3 className="sub-blog mb-5">{t("Blog_all_news")}</h3>
        <div className="contain-er">
          <div className="tech_wrapper">
            <h1>
              <span>Explore</span> the <span> world </span> of{" "}
              <span> tech.</span>
            </h1>
            <h3>where voices are shared through writings.</h3>
          </div>
          <div className="blog_wrapper">
            <Posts posts={currentPosts} loading={isFetching} />
          </div>
        </div>
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={data?.length}
        paginate={paginate}
      />
    </div>
  );
};

export default Blogs;
