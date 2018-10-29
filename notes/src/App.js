import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import List from './components/List/List';
import ViewNote from './components/ViewNote/ViewNote';
import CreateNote from './components/CreateNote/CreateNote';
import EditNote from './components/EditNote/EditNote';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Route exact path="/" component={List} />
        <Route path="/note/:id" component={ViewNote} />
        <Route path="/create" component={CreateNote} />
        <Route path="/note/:id/edit" component={EditNote} />
      </div>
    );
  }
}

export default App;
