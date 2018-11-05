import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./homePage.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }
  showNotes(event) {
    event.preventDefault();
    console.log("Show me the notes!");
  }
  createNote(event) {
      event.preventDefault();
      console.log('event created');
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
              <button onClick={this.showNotes}>View Your Notes</button>
            </NavLink>
            <button onClick={this.createNote}>+ Create New Note</button>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
