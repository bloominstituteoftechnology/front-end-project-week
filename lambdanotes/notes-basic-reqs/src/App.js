import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import './style/App.css';
import NoteList from './components/NoteList';
import {Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">

            <div className='nav-container'>
              <h1>Lambda Notes</h1>
              <Button className='nav-btn' block>View Your Notes</Button>
              <Button className='nav-btn' block>Create New Note</Button>
            </div>
            
            <div className='container'>
              <NoteList />
            </div>
      </div>
    );
  }
}

export default App;


