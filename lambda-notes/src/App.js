import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// import { withRouter } from "react-router-dom";
// import { connect } from "react-redux";
import { Row, Col, Card, Container, Button } from "reactstrap";
import { Route, Link, Switch } from "react-router-dom";

import EditNote from './Components/EditNote';
import NoteCard from "./Components/NoteCard";
import NavBar from "./Components/NavBar";
import NoteList from "./Components/NoteList";
import NewNote from "./Components/NewNote";
import Note from "./Components/Note";

class App extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          title: "Note 1",
          id: 1,
          note: `
         Basketball ipsum dolor sit amet free throw basketball basket bank shot,
         outlet power forward flop zone defense Duncan. Nowitzki James Duncan rip
         alley-oop three. Bryant swish power forward center post Barkley key
         `
        },
        {
          title: "Note 2",
          id: 2,
          note: `
         Basketball ipsum dolor sit amet free throw basketball basket bank shot,
         outlet power forward flop zone defense Duncan. Nowitzki James Duncan rip
         alley-oop three. Bryant swish power forward center post Barkley key
         `
        },
        {
          title: "Note 3",
          id: 3,
          note: `
         Basketball ipsum dolor sit amet free throw basketball basket bank shot,
         outlet power forward flop zone defense Duncan. Nowitzki James Duncan rip
         alley-oop three. Bryant swish power forward center post Barkley key
         `
        },
        {
          title: "Note 4",
          id: 4,
          note: `
         Basketball ipsum dolor sit amet free throw basketball basket bank shot,
         outlet power forward flop zone defense Duncan. Nowitzki James Duncan rip
         alley-oop three. Bryant swish power forward center post Barkley key
         `
        },
        {
          title: "Note 5",
          id: 5,
          note: `
         Basketball ipsum dolor sit amet free throw basketball basket bank shot,
         outlet power forward flop zone defense Duncan. Nowitzki James Duncan rip
         alley-oop three. Bryant swish power forward center post Barkley key
         `
        },
        {
          title: "Note 6",
          id: 6,
          note: `
         Basketball ipsum dolor sit amet free throw basketball basket bank shot,
         outlet power forward flop zone defense Duncan. Nowitzki James Duncan rip
         alley-oop three. Bryant swish power forward center post Barkley key
         `
        },
        {
          title: "Note 7",
          id: 7,
          note: `
         Basketball ipsum dolor sit amet free throw basketball basket bank shot,
         outlet power forward flop zone defense Duncan. Nowitzki James Duncan rip
         alley-oop three. Bryant swish power forward center post Barkley key
         `
        },
        {
          title: "Note 8",
          id: 8,
          note: `
         Basketball ipsum dolor sit amet free throw basketball basket bank shot,
         outlet power forward flop zone defense Duncan. Nowitzki James Duncan rip
         alley-oop three. Bryant swish power forward center post Barkley key
         `
        },
        {
          title: "Note 9",
          id: 9,
          note: `
         Basketball ipsum dolor sit amet free throw basketball basket bank shot,
         outlet power forward flop zone defense Duncan. Nowitzki James Duncan rip
         alley-oop three. Bryant swish power forward center post Barkley key
         `
        }
      ]
    };
  }
  render() {
    console.log("AppState", this.state.notes);

    return (
      <div>
        {/* <NavBar /> */}
        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              return <NoteList {...props} notes={this.state.notes} />;
            }}
          />
          <Route exact path="/Note" component={Note} />
          <Route exact path ='/edit' component={EditNote} /> 
          <Route
            path="/notes/:id"
            render={props => {
              return <NoteCard {...props} notes={this.state.notes} />;
            }}
          />
          <Route
            path="/NewNote"
            render={props => {
              return <NewNote {...props} notes={this.state.notes} />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
