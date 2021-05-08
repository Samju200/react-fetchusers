import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './searchCountry.css';

const SearchCountry = ({
  handleInputSearch,
  handleSubmitSearch,
  searchInputCountry,
  setSearchInputCountry,
}) => {
  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmitSearch(e, searchInputCountry);
        }}
      >
        <div className="form-2">
          <FaSearch className="form-2-searchIcon" />
          <input
            type="text"
            placeholder="Find in list"
            // value={searchInputCountry}
            onChange={(e) => {
              handleInputSearch(e, setSearchInputCountry);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchCountry;
