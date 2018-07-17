import React, { Component } from 'react';
import SideBar from './components/SideBar/SideBar';
import ListView from './components/ListView/ListView';
import AddNote from './components/AddNote/AddNote';
import EditNote from './components/EditView/EditView';
import { Route } from 'react-router-dom';
import './App.css';

export default class App extends Component {
  render = () => {
    return (
      <div className="App">
        <SideBar />
        <Route exact path='/' component={ListView} />
        <Route path='/Add-Note' component={AddNote} />
        <Route path='/Edit-Note/:index' component={EditNote} />
      </div>
    );
  }
}
