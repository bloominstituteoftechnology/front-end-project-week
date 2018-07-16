import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <Fragment>
      <Link to="/">View Your Notes</Link>
      <Link to="/notes/new">+ Create a New Note</Link>
    </Fragment>
  );
};

export default SideBar;
