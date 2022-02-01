import React from "react";
import "./Pagination.css";
import PropTypes from "prop-types";

const Pagination = ({ postsPerPage, totalPosts, setCurrentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <ul className=" pagination justify-content-center ">
        {pageNumbers.map((number) => (
          <li key={number} className=" text-center page-item">
            <a onClick={() => setCurrentPage(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
Pagination.propTypes = {
  postsPerPage: PropTypes.number,
  totalPosts: PropTypes.number,
  setCurrentPage: PropTypes.func,
};

export default Pagination;
