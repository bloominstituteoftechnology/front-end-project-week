import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import axios from 'axios';
import "./homePage.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }
  showNotes = event => {
    event.preventDefault();
    console.log("Show me the notes!");
  }
  
  render() {
    return (
      <div className="container">
        <div className="sideBar">
          <NavLink to="/">
            <h1 className="lambdaTitle">Lambda Notes</h1>
          </NavLink>
          <div className="sideBarButtons">
            <NavLink to="/notes">
              <button>View Your Notes</button>
            </NavLink>
            <NavLink to="/createnote">
              <button>+ Create New Note</button>
            </NavLink>
          </div>
        </div>
        <div className="notesBody">
          Your Notes
        </div>
      </div>
    );
  }
}

export default HomePage;
