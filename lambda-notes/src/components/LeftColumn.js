import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './LeftColumn.css';

const LeftColumn = () => {
  return (
    <div className="left-column">
      <div className="title">
        <h1>
          <strong>Lambda</strong>
        </h1>
        <h1>
          <strong>Notes</strong>
        </h1>
      </div>
      <button className="btn btn-block">View Your Notes</button>
      <button className="btn btn-block"> + Create New Note</button>
    </div>
  );
};

export default LeftColumn;
