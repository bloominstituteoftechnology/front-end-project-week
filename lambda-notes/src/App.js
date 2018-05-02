import React, { Component } from 'react';
import {Switch,Route,Link} from 'react-router-dom';
import Home from './components/Home'
import Create from './components/Create'
import Edit from './components/Edit'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = "sideBar">
          <h1> Lambda Notes </h1>
          <Link to = '/'><button> View Your Notes </button></Link>
          <Link to = "/create"> <button> +Create New Note </button></Link>
         </div>
        <div className = "content">
          <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route path = "/edit/:id" component = {Edit}/>
            <Route path = "/create" component = {Create}/>
          </Switch>
        </div>
        </div>
    )}
}

export default App;
