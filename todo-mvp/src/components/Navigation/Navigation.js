import React, { Component } from "react";
import { Nav } from "reactstrap";
import { Link  } from 'react-router-dom';
import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <div className="Navigation">
        <header>
          <h1>Lambda Notes</h1>
        </header>
        <Nav vertical>
          <button className="nav-btn">
            <Link to="/">
              View Your Notes
            </Link>
          </button>
          <button className="nav-btn">
          <Link to="/create">
            + Create New Note
            </Link>
          </button>
        </Nav>
      </div>
    );
  }
}

export default Navigation;
