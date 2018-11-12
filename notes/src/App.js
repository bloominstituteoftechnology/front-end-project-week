import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from  "./components/layout/Navbar"
import Dashboard from "./components/dashboard/Dashboard"


class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" component ={Dashboard} />
      </Switch>
     </div>
    );
  }
}

export default App;
