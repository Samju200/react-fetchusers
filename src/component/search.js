import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './search.css';
const Search = ({
  handleInputSearch,
  handleSubmitSearch,
  searchInput,
  setSearchInput,
}) => {
  // console.log(searchInput);
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmitSearch(e, searchInput);
        }}
      >
        <div className="form">
          <FaSearch className="form-searchIcon" />
          <input
            type="text"
            placeholder="Find a user"
            // value={searchInput}
            onChange={(e) => {
              handleInputSearch(e, setSearchInput);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
