import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

function Nav() {
    return (
        <nav class='nav flex-column nav-side col-3'>
          <h3>Lambda</h3>
          <h3>Notes</h3>
          <Link to="/" class='btn-primary'>View Your Notes</Link>
          <Link to="/create-new-note"class='btn-primary'>+Create New Note</Link>
        </nav>
    )
};

export default Nav;