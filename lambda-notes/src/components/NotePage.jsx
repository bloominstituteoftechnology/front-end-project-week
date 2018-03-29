import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const NotePage = ( props ) => {
  console.log(props);
  const { note: { text, title }} = props;
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