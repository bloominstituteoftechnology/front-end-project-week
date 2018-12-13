import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class SideBar extends Component {
  render() {
    return (
      <div>
        <h1 class='lambda'>Lambda Notes</h1>
        <div class="nav">
        <Link to="/new-note" class="create">Create</Link>
        <Link to="/" class="view">View</Link>
        </div>
      </div>
    );
  }
}

export default SideBar;