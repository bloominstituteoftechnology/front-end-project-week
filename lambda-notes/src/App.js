import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";
import { Route } from "react-router";
import NoteCard from "./Components/NoteCard";
import NavBar from "./Components/NavBar";
import dummyData from "./Components/Dummy-Data";
import NoteList from "./Components/NoteList";
import NewNote from './Components/NewNote';

class App extends Component {
  constructor() {
    super();
  }
  render() {
   console.log('AppState', this.props)
    return (
      <div className="App">
        <Row className="listRow">
          <Col sm="4">
            <NavBar />
          </Col>
          <Col sm="12">
            <Route exact path="/" component={NoteList} />
            <Route path="/notes/:id" component={NoteCard} />
            <Route path="/newnote" component={NewNote} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(connect(null)(App));
