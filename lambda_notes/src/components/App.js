import React, { Component } from 'react';
import './App.css';
// import { fetchTodos, createTodo } from './actions';
import { connect } from 'react-redux';
import { getNotes } from "./defaultNotes";
import DisplayNotes from './DisplayNotes'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import SideBar from "./sidebar";
import NoteCard from "./card";
import DeleteNote from "./deleteNote";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: getNotes(),
      view: "list",
    }}; 

    render() {
      return (
        <Router>
          <div className="App">
          <SideBar/>
          <DisplayNotes/>
          <Route path="/Notes/:id" component={NoteCard} />
          {/* <Route
            render={routeProps => (
              <SingleNote
                {...routeProps}
                {...this.props}
                notes={this.state.notes}
              />
            )}
            path="/note/:id"
          /> */}
          </div>
        </Router>
      );
    }
  }

export default App;


