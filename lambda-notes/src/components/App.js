import React, { Component } from "react";
import "../styling/App.css";
import MainView from "./MainView";
import CreateView from "./CreateView";
import OneNote from "./OneNote";
import EditView from "./EditView";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import NotesViewStyled from "../styling/NotesViewStyled";

class App extends Component {
  render() {
    return (
      <Router>
        <NotesViewStyled>
          <div className="LeftBar">
            <h1>Lambda Notes</h1>
            <NavLink to="/">
              <button>View Your Notes</button>
            </NavLink>
            <NavLink to="/create">
              <button>+ Create New Note</button>
            </NavLink>
          </div>
          <Route exact path="/" component={MainView} />
          <Route path="/create" component={CreateView} />
          <Route
            path="/note/:id"
            render={props => {
              return <OneNote id={props.match.params.id} />;
            }}
          />
          <Route
            path="/edit/:id"
            render={props => {
              return <EditView id={props.match.params.id} />;
            }}
          />
        </NotesViewStyled>
      </Router>
    );
  }
}

export default App;

// Questions
// 1. What order do things fire on a render? Does it go through the the entire file before implementing anything? (I have a specific example that I'd love to ask someone about)
// 2. When does setState execute? I had a console.log right after the setState within a handler, and it didn't seem to change right there within my handler?
// 3. With actions, I had some trouble with types (id that comes in as a Number and another time as a String). Just a general question about types as you pass through actions/reducers.