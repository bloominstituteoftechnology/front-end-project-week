import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

import './NotesNav.css';

const NotesNav = () => {
  return (
    <div className="sidenav">
      <h1>Lambda Notes</h1>
      <Link to="/notes"><Button color="info" size="lg" block>View Your Notes</Button></Link>
      <Link to="/add"><Button color="info" size="lg" block>+ Create New Note</Button></Link>
    </div>
  );
}

export default NotesNav;