import React from "react";
import {Input } from 'reactstrap';

const Search = ({searchList, placeholder}) => {
  return (
    <div className="search-box">
      <Input
        type="text"
        className="form-control w-100 w-md-75 w-lg-50"
        placeholder={placeholder}
        onChange={(e) => searchList(e.target.value)}
      />
      <i className="ri-search-line search-icon"></i>
    </div>
  );
};

export default Search;
