import React from "react";

import { InstantSearch, Hits, SearchBox } from "react-instantsearch-dom";

import Product from "./Product";

// [...]

const Search = () => {
  return (
    <div className="container">
      <SearchBox />
      <Hits hitComponent={Product} />
    </div>
  );
};

export default Search;
