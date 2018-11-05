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
  createNote = event => {
    event.preventDefault();
    const newNote = {
      tags: this.state.tags,
      title: this.state.title,
      textBody: this.state.textBody
    }
    axios.post('https://fe-notes.herokuapp.com/note/create', newNote)
    .then(response => {
      this.setState({notes: response.data })
    })
    .catch(err => console.log(err))
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
            <NavLink to="/createnote">
              <div onClick={this.createNote}>+ Create New Note</div>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
