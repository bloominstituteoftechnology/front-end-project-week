//IMPORTS
import React, { Component } from 'react';
import './App.css';
import LeftBanner from './components/LeftBanner.js';
import {Route} from 'react-router-dom';
import Content from './components/noteBody/content.js';

class App extends Component {
  render() {
    return (
      <Route path='/'>
        <div className="App container-fluid">
            <div className='row masterRow'><LeftBanner />
            <div className='col-9 contBody'><Content /></div>
            </div>
        </div>
      </Route>
    );
  }
}

export default App;
