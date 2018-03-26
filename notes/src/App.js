import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import List from './components/List';
import Note from './components/Note';
import Edit from "./components/Edit";
import { Row, Col } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <Row>
        <Col xs="3" className="Menu">
        sup
        </Col>
        <Col>
          <Route exact path="/" component={List}/>
          <Route path="/notes/:note" component={Note}/>
          <Route path="/edit/:note" component={Edit}/>
        </Col>
      </Row>
    );
  }
}

export default App;
