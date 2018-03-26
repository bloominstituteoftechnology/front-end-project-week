import React from 'react';

import './Nav.css';

function Nav() {
    return (
        <nav class='nav flex-column nav-side col-3'>
          <h3>Lambda</h3>
          <h3>Notes</h3>
          <button class='btn-primary'>View Your Notes</button>
          <button class='btn-primary'>+Create New Note</button>
        </nav>
    )
};

export default Nav;