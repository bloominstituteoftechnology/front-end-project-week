import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Container, Row, Col, Button } from 'reactstrap';

import NotesList from './components/notesList';
import CreateNote from './components/createNote';
import ViewNote from './components/viewNote';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cards: [
        { title: "Card title # 1", content: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        // { title: "Card title # 2", content: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        // { title: "Card title # 3", content: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        // { title: "Card title # 2", content: "Some quick example text to build on the card title and make up the bulk of the card's content." },
        // { title: "Card title # 3", content: "Some quick example text to build on the card title and make up the bulk of the card's content." },
      ],
      newNote: {
        title: '',
        content: ''
      },
      selectedNote: {
        title: '',
        content: ''
      }
    }
  }

  updateNewNote = (newNote) => {
    this.setState({ cards: [...this.state.cards, newNote]});
  }

  updateSelectedNote = (selectedNote) => {
    this.setState({ selectedNote: selectedNote });
  }

  render() {
    return (
      <Router>
      <div className="App">
        <div className="side-nav">
          <br />
          <h2>Lambda<br />Notes</h2>
          <Link to="/"><Button className="btn-info btn-block">View Your Notes</Button></Link>
          <br />
          <Link to="create-note"><Button className="btn-info btn-block">+ Create New Note</Button></Link>
        </div>
        <div className="main-view">
          <Container>
            <Row>
              <div className="col-12">
                <Switch>
                  <Route exact path="/" render={() => <NotesList updateSelectedNote={this.updateSelectedNote} {...this.state} />} />
                  <Route path="/create-note" render={() => <CreateNote {...this.state} updateNewNote={this.updateNewNote} />} />
                  <Route path="/notes-view" render={() => <ViewNote {...this.state} />} />
                </Switch>
              </div>
            </Row>
          </Container>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
