import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './NavBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Nav />
          <Route path="/viewnotes" component={this.ViewNotes} exact />
        </div>
      </Router>
    );
  }

  ViewNotes = () => {
    return (
      <div className="Home__Right">
        Right
      </div>
    )
  };

}

export default App;
