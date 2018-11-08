import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SideBar extends Component {
  render() {
    return (
      <div>
        <h1 >Lambda</h1>
        <h1>Notes</h1>
        <Link to="/">View</Link>
        <Link to="/new-note">Create</Link>
      </div>
    );
  }
}

export default SideBar;