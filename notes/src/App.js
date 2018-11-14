import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SideBar from './components/Sidebar';
import Notes from './components/Notes';


class App extends Component {
  render() {
    return (
      <div>
        <Route path='/' component={SideBar} />
        <Route exact path='/notes' component={Notes} />
      </div>
    );
  }
}

export default App;
