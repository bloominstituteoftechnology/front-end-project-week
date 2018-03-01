import React, { Component } from 'react';
import LeftColumn from './Components/LeftColumn';
import RightColumn from './Components/RightColumn';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddNote from './Components/AddNote';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <LeftColumn />
          <Route path='/' component={RightColumn} exact />
          <Route path='/addnote' component={AddNote} />
        </div>
      </Router>
    );
  }
}

export default App;
