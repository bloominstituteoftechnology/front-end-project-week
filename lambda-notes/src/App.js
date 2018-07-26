import React, { Component } from 'react';
import ViewList from './components/ViewList/ViewList';
import { Route } from 'react-router-dom';
import AddNote from './components/AddNote/AddNote';
import EditNote from './components/EditNote/EditNote';
//import Sidebar from './components/Sidebar/Sidebar';
import { Grid, Col, Row  } from 'react-bootstrap';


import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <div className="App">
<Grid>
  <Row className="show-grid">
    <Col xs={6} md={4}>
      <code>&lt;{'Col xs={6} md={4}'} /">">&gt;</code>
    </Col>
    <Col xs={6} md={4}>
      <code>&lt;{'Col xs={6} md={4}'} /">">&gt;</code>
    </Col>
    <Col xsHidden md={4}>
      <code>&lt;{'Col xsHidden md={4}'} /">">&gt;</code>
    </Col>
  </Row>
</Grid>;


        <Route exact path='/notes' component={ViewList} />
        <Route exact path='/Add-Note' component={AddNote} />
        <Route exact path='/Edit-Note/:index' component={EditNote} />
      
      </div>
    );
  }
}

//export default App;
