import React, { Component } from 'react';
import { Container, Row, Button } from 'reactstrap';
import { Route, Link } from 'react-router-dom';

import './App.css';
import dummyData from './dummyData';
import NoteList from './Components/NoteList';
import CreateForm from './Components/CreateForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
        notes: []
    };
}

componentDidMount() {
    this.setState({ notes: dummyData })
}

  render() {
    return (
      <div className="App">
      <Container>
        <Row>
        <div className='nav-container col-3'>
          <h3>Lambda Notes</h3>
          <Link to='/'>
            <Button className='nav-btn' block>
            View Your Notes
            </Button>
          </Link>
          <Link to='CreateForm'>
            <Button className='nav-btn' block>
            +Create New Note
            </Button>
          </Link>
        </div>  
        <div className='note-container col-9'>
          <Route exact path='/' render={() => <NoteList {...this.state} />} />
          <Route path='/createForm' component={CreateForm} />

        </div>      
      </Row>
      </Container>
      </div>
    );
  }
}

export default App;
