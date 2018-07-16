import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <nav>
        <h1>Lambda Notes</h1>
        <a className="nav__link" href="/">View Your Notes</a>
        <a className="nav__link" href="/create">+ Create New Note</a>
      </nav>
    );
  }
}

export default Nav;