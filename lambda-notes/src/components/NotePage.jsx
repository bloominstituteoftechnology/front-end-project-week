import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const NotePage = ({ note: { text, title }}) => {
  return (
    <Fragment>
      <div className="Edit">
        <Link className="Edit__Link" to="/edit">edit</Link>
        <Link className="Edit__Link" to="/delete">delete</Link>
      </div>
      <h2 className="ViewNote">{title}</h2>
      <div className="ViewText">{text}</div>
    </Fragment>
  );
};