import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Banner from './Banner';
import ListView from './ListView';
import CreateNote from './CreateNote';
import ViewNote from './ViewNote';
import EditNote from './EditNote';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Route exact path='/' component={ListView} />
        <Route exact path='/create' component={CreateNote} />
        <Route exact path='/view' component={ViewNote} />
        <Route exact path='/edit' component={EditNote} />
      </div>  
    );
  }
}

export default App;
