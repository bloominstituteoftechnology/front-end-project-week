import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Listview from './Component/Layout/Listview';
import Editview from './Component/Layout/Editview';
import Createview from './Component/Layout/Createview';
import Noteview from './Component/Layout/Noteview';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
          <Route exact path="/" component={ Listview }/>
          <Route path="/edit" component={ Editview }/>
          <Route path="/create" component={ Createview }/>
          <Route path="/note" component={ Noteview }/>
          
      </div>
    );
  }
}

export default App;
