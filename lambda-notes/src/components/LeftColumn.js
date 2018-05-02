import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link to="/users/listview" className="btn btn-block">
        View Your Notes
      </Link>
      <Link to="/users/createnote" className="btn btn-block">
        + Create New Note
      </Link>
    </div>
  );
};

export default LeftColumn;
