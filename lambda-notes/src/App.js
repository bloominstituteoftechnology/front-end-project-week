import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { CreateView, EditView, NoteView, ListView } from './views';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path='/' component={ListView} />
        <Route path='/add' component={CreateView} />
        <Route path='/edit' component={EditView} />
        <Route path='/:id' render={(props) => (<NoteView {...props} />)} />
      </Switch>
      </div>
    );
  }
}

export default withRouter(App);
