import React, { Component } from 'react';
import { Route, Link }from "react-router-dom";
import { Row, Col, Container, Input, Button } from "reactstrap";
import logo from './logo.svg';
import Nyancat from './Nyancat.gif';
import './App.css';
import NoteList from './Components/NoteList';
import NoteView from './Components/NoteView';
import NewNote from './Components/NewNote';

const placeHolder = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const initialNotes = [
  {id: 1,
  title: "First Note",
  content: placeHolder + placeHolder},
  {id: 2,
  title: "Second Note",
  content: placeHolder + placeHolder},
  {id: 3,
  title: "Third Note",
  content: placeHolder + placeHolder + placeHolder},
  {id: 4,
  title: "Fourth Note",
  content: placeHolder + placeHolder + placeHolder + placeHolder}
];


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: initialNotes,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Nyancat} className="App-logo" alt="logo" />
          <h1 className="App-title">Lambda Notes</h1>
          <Link to="/"><Button>View Your Notes</Button></Link>

          <Link to="/create"><Button>Create New Note</Button></Link>

        </header>
        <Container>
          <Col sm="9">
            <Route exact path="/" 
              render={props => {
                return <NoteList notes={this.state.notes} />;  
              }}/>
            <Route exact path="/note/:id"
              render={props => {
                return(
                  <NoteView {...props}
                    notes={this.state.notes}
                  />
                );
            }}/>
            <Route path="/create"
              render={props => {
                return (
                  <NewNote 
                    notes={this.state.notes}
                    addNote={this.addNote}
                  />
                );
              }}
            />
          </Col>
        </Container>
      </div>
    );
  }
}

export default App;
