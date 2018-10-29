import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { CreateView, EditView, NoteView, ListView } from './views';
import { Sidebar } from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={Sidebar} />
        <Route exact path='/' component={ListView} />
        <Route path='/add' component={CreateView} />
        <Route path='/edit' component={EditView} />
        <Route path='/:id' component={NoteView} />
      </div>
    );
  }
}

export default App;
