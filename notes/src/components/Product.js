import React from "react";

import { Highlight } from "react-instantsearch-dom";

const Product = ({ hit }) => {
  return (
    <div style={{ marginTop: "10px" }}>
      <span className="hit-name">
        <Highlight attribute="name" hit={hit} />
      </span>
    </div>
  );
};

export default Product;
