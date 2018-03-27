import React, { Component } from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import List from './components/List';
import Edit from './components/Edit';
import Create from './components/Create';
import Note from './components/Note';
import { Container, Row, Col, Button } from 'reactstrap';


class App extends Component {
  render() {
    return (
      <Container>
        <Row className="Container">
          <Col xs="3" className="Menu">
            <h1 className='Menu__heading'>Lambda Notes</h1>
            <Link to="/">
              <Button color="deoco" className="Button">View Your Notes</Button>
            </Link>
            <Link to="/create">
              <Button color="deoco" className="Button">+ Create New Note</Button>
            </Link>
          </Col>
          <Col className="ContentArea">
            <Route exact path="/" component={List}/>
            <Route path="/notes/:id" component={Note}/>
            <Route path="/edit/:id" component={Edit}/>
            <Route path="/create" component={Create}/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
