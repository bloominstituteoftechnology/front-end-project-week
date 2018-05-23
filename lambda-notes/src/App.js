import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col, Button } from 'reactstrap';
import note from "./components/dummyData";
import NoteList from './components/NoteList'
import NavBar from './components/NavBar';
import NoteForm from './components/NoteForm';
import ViewNote from './components/ViewNote';
import EditNote from './components/EditNote';
import { Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
  }

  componentDidMount () {
    this.setState ({ 
      notes: note
    })
  }

  render() {
    const { noteInList } = this.state;
    return (
      <div className="App">
      <Container>
        <Row>
          <Col sm='3'>
            <NavBar />
          </Col>
          <Col sm='9'>
            <Route exact path='/' render={(props) => <NoteList { ...this.state } />} />
            <Route path='/note-form' component={ NoteForm } />
            <Route exact path='view-note' component={ ViewNote } />
            <Route path='/edit-note' component={ EditNote } />
          </Col> 
        </Row>
      </Container>
      </div>
    );
  }
}

export default App;
