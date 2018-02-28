import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SideBar from './SideBar/SideBar';
import MainComp from './MainComp/MainComp';
import ViewNote from './ViewNote/ViewNote';
import NewNote from './NewNote/NewNote';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <SideBar/>
          <Route path="/" component={MainComp} exact />
          <Route path="/new-note" component={NewNote} />
          <Route path="/notes/:id" component={ViewNote} />
        </div>
      </Router>
    );
  }
}

export default App;
