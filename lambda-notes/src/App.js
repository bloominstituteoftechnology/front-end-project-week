import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Container, Row, Col, Button } from 'reactstrap';

import NotesList from './components/notesList';
import CreateNote from './components/createNote';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Row>
            <div className="side-nav col-2">
              <br />
              <h2>Lambda<br />Notes</h2>
              <Link to="/"><Button className="btn-info btn-block">View Your Notes</Button></Link>
              <br />
              <Link to="create-note"><Button className="btn-info btn-block">+ Create New Note</Button></Link>
            </div>
            <div className="main-view col-10">
              <Switch>
                <Route exact path="/" component={NotesList} />
                <Route path="/create-note" component={CreateNote} />
                {/* <Route component={NotesList} /> */}
              </Switch>
            </div>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;
