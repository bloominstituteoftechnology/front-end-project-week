import React, { Component } from "react";
import { Link  } from 'react-router-dom';
import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <header className="nav-header">
          <h1>Lambda Notes</h1>
        </header>
        <Link className="nav-btn" to="/">
          <div>View Your Notes</div>
        </Link>
        <Link className="nav-btn" to="/create">
          <div>+ Create New Note</div>
        </Link>
      </div>
    )
  }
}

export default Navigation;
