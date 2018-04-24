import React, { Component } from 'react';
import PageNavigator from './components/PageNavigator';
import NewNoteForm from './components/NewNoteForm';
import NoteItem from './components/NoteItem';
import { lambdaNotes } from './components/MyNotes';
import { NoteList } from './components/NoteList';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state ={
      Notes: [],
    };
  }

  componentDidMount() {
    this.setState({ Notes: lambdaNotes })
  }

  render() {
    return (
      <div className="app-wrapper">
          <PageNavigator />
          <Switch />
          <Route 
          exact path="/"
          render={() => <NoteList Note={this.state.Notes} />} />
          <Route 
          path="/new" component={NewNoteForm} />
          <Route path="/note/:id" render={props => 
          <NoteItem {...props} {...this.state} /> } />
      </div>
    );
  }
}

export default App;
