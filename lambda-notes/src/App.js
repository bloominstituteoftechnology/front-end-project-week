import React, { Component } from 'react';
import ViewList from './components/ViewList/ViewList';
import { Route } from 'react-router-dom';
import AddNote from './components/AddNote/AddNote';
import EditNote from './components/EditNote/EditNote';
import Sidebar from './components/Sidebar/Sidebar';
// import { Grid, Col, Row  } from 'react-bootstrap';


import './App.css';

export default class App extends Component {

  render() {

    return (
      <div className="App">
        <Sidebar />
        <Route exact path='/' component={ViewList} />
        <Route path='/Add-Note' component={AddNote} />
        <Route path='/Edit-Note/:index' component={EditNote} />
      </div>
    );
  }
 }
 



//export default App;
