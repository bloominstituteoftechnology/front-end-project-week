import React, { Component } from 'react';
import './App.css';
import Banner from './components/leftBanner.js';
import {Route} from 'react-router-dom';
import Content from './components/body/content.js';

class App extends Component {

  
  render() {
    return (
      <Route path='/'>
        <div className="App container-fluid">
          <div className='row masterRow'><Banner />
            <div className='col-9 contBody'><Content /></div>
          </div>
        </div>
      </Route>
    );
  }
}

export default App;
