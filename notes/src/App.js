import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import SideBar from './components/SideBar';
import ListView from './components/ListView';
import CreateNote from './components/CreateNote';
import NoteView from './components/NoteView';
import EditNoteView from './components/EditNoteView';
import NotFound from './components/NotFound';
import SearchedListView from './components/SearchedListView';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


class App extends Component {
  state = {
    test: 'the props is begin passed',
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route path='/' component={SideBar} />
          <Switch>
            <Route path='/' component={ListView} exact />
            <Route path='/new' component={CreateNote} exact />
            <Route path='/view/:id' component={NoteView} exact />
            <Route path='/edit/:id' component={EditNoteView} exact />
            <Route path='/delete/:id' component={ListView} exact />
            <Route path='/search/:terms' component={SearchedListView} exact />
            <Route path='/404' component={NotFound} exact />
            <Redirect to="/404" />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    deleting: state.deleting,
  };
};

export default connect(mapStateToProps)(App);
