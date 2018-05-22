import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Route } from 'react-router-dom';
import AddNote from './components/noteAll/AddNote';

class App extends Component {
  render() {
    return (
      <Route path='/'>
        <div className='App container-fluid'>
          <div className='row mainRow'><NavBar /></div>
          <div className='col-9 contAll'><AddNote /></div>
        </div>
      </Route>

    );
  };
};

export default App;
