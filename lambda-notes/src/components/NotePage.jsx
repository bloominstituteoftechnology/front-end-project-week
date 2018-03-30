import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const NotePage = ({ del, id, text, title }) => {
  return (
    <Fragment>
      <div className="Edit">
        <Link className="Edit__Link" to={`/edit/${id}`}>edit</Link>
        <Link className="Edit__Link" to="/" onClick={() => del(id)}>delete</Link>
      </div>
      <h2 className="ViewNote">{title}</h2>
      <div className="ViewText">{text}</div>
    </Fragment>
  );
};