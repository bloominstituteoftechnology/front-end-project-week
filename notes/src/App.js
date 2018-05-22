import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { Row, Col, Container, Input, Button } from "reactstrap";
import logo from './logo.svg';
import './App.css';
import NoteList from './components/NoteList';

const placeHolder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const initialNotes = [
  {
    id: 1,
    title: "First Note",
    content: placeHolder + placeHolder
  },
  {
    id: 1,
    title: "Second Note",
    content: placeHolder + placeHolder
  },
  {
    id: 1,
    title: "Third Note",
    content: placeHolder + placeHolder + placeHolder
  },
  {
    id: 1,
    title: "Fourth Note",
    content: placeHolder + placeHolder + placeHolder + placeHolder
  }
];


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: initialNotes,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Lambda Notes</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Container>
          <Col sm="3">
            <Route path="/"
              render={props => {
                return <NoteList notes={this.state.notes} />;
              }} />
          </Col>
        </Container>
      </div>
    );
  }
}

export default App;