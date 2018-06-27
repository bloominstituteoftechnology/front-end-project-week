import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import SideBar_ from '../SideBar_/SideBar_';
import Main_Connected from '../Main_/Main_';

class App extends Component {
  render() {
    return (
      <div className="container custom-container">
        <div className="row">
          <SideBar_ />
          <Route component={Main_Connected} />
        </div>
      </div>
    );
  }
}

export default App;
