import React from 'react'
import './pagination.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
const Pagination = ({postsPerPage, totalPosts, paginate, nextPage,prevPage }) => {
 const pageNumbers = [];
 for(let i= 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
     pageNumbers.push(i)
 }
    return (
      <div className="pagination">
        <button
          className="prev-btn"
          onClick={() => {
            prevPage();
          }}
        >
          <ArrowBackIosIcon className="page-btn" />
        </button>
        {/* {pageNumbers.map((number) => {
          return (
            <button
              key={number}
              className="page-item"
              onClick={() => {
                paginate(number);
              }}
            >
              {number}
            </button>
          );
        })} */}
        <button
          className="prev-btn"
          onClick={() => {
            nextPage();
          }}
        >
          <ArrowForwardIosIcon className="page-btn" />
        </button>
        
      </div>
    );
}

export default Pagination
