import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import List from './components/List';
import Note from './components/Note';
import Edit from "./components/Edit";
import { Container, Row, Col, Button } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <Container>
        <Row className="Container">
          <Col xs="3" className="Menu">
            <h1>Lambda Notes</h1>
            <Link to="/">
            <Button color="deoco" className="Button">View Your Notes</Button>
            </Link>
            <Link to="/create">
            <Button color="deoco" className="Button">+ Create New Note</Button>
            </Link>
          </Col>
          <Col>
            <Route exact path="/" component={List}/>
            <Route path="/notes/:note" component={Note}/>
            <Route path="/edit/:note" component={Edit}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
