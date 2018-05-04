import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const NotePage = ({ _id, del, text, title }) => {
  return (
    <Fragment>
      <div className="Edit">
        <Link className="Edit__Link" to={`/edit/${_id}`}>
          edit
        </Link>
        <Link className="Edit__Link" to="/" onClick={() => del(_id)}>
          delete
        </Link>
      </div>
      <h2 className="ViewNote">{title}</h2>
      <div className="ViewText">{text}</div>
    </Fragment>
  );
};
