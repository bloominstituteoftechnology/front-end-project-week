import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Route, NavLink } from "react-router-dom";
import NoteList from "./components/notelist";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    this.getNotes();
  }

  getNotes = () => {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => {
        // console.log(response.data);
        this.setState({ notes: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <>
      <div className='noteview'>
      <div className="sidebar">
        <h1>Lambda</h1>
        <h1>Notes</h1>
        <div className="navigation">
          <NavLink className='sidebarbutton' to="/" onClick={this.getNotes}>
            View Your Notes
          </NavLink>
          <button className='sidebarbutton'>+ Create New Note</button>
        </div>
      </div>
      
          <Route
            path="/"
            exact
            render={props => <NoteList {...props} notes={this.state.notes} />}
          />
          </div>
          </>
    );
  }
}

export default App;
