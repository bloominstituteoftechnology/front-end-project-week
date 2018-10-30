import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { CreateView, NoteView, ListView } from './views';
import './App.css';
// import { DeleteModal } from './components';
// import { connect } from 'react-redux';
// import { deleteNote } from './actions';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path='/' component={ListView} />
        <Route path='/add' render={(props) => (<CreateView {...props} />)} />
        <Route path='/:id' render={(props) => (<NoteView {...props} />)} />
      </Switch>
      </div>
    );
  }
}

export default withRouter(App);
