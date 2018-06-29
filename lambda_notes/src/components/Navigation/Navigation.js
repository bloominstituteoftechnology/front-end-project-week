import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Navigation/Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <div className="NavigationBar">
        <h1 className="Main-Heading">Lambda Notes</h1>
        <Link to="/home">
          <button className="NavButton">View Your Notes</button>
        </Link>
        <Link to="/create">
          <button className="NavButton">+ Create New Note</button>
        </Link>
      </div>
    );
  }
}

export default Navigation;
