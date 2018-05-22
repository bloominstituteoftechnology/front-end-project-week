import React, { Component } from 'react';
import { Route } from "react-router-dom";
import { Row, Col, Container, Input, Button } from "reactstrap";
import logo from './logo.svg';
import './App.css';
import NoteList from './components/NoteList';

const placeHolder = "/";

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
          
          <h1 className="App-title">Lambda Notes</h1>
        </header>
        <p className="App-intro">
      
        </p>
        <Container>
          <Col sm="3">
            <Route path="/"
              render={props => {
                return <NoteList notes={this.state.notes} />;
              }} />
          </Col>
          <Col sm="3">
            <Route path="/"
              render={props => {
                return <NoteList notes={this.state.notes} />;
              }} />
          </Col>
          <Col sm="3">
            <Route path="/"
              render={props => {
                return <NoteList notes={this.state.notes} />;
              }} />
          </Col>
          <Col sm="3">
            <Route path="/"
              render={props => {
                return <NoteList notes={this.state.notes} />;
              }} />
          </Col>
          <Col sm="3">
            <Route path="/"
              render={props => {
                return <NoteList notes={this.state.notes} />;
              }} />
          </Col>
          <Col sm="3">
            <Route path="/"
              render={props => {
                return <NoteList notes={this.state.notes} />;
              }} />
          </Col>
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