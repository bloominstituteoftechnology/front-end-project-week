import React, { Component } from 'react';
import Route from 'react-router-dom';

import SideBar from './components/SideBar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  clickHandler(url) {
    props.history.push(url);
  }

  render() {
    return (
      <div className="App">
        <Route
          path='/'
          component={SideBar}
        />
      </div>
    );
  }
}

export default App;
