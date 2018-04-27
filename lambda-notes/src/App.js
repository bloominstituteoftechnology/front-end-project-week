import React, { Component } from 'react';
import PageNavigator from './components/PageNavigator';
import NewNoteForm from './components/NewNoteForm';
import NoteItem from './components/NoteItem';
import EditNoteForm from './components/EditNoteForm';
import { lambdaNotes } from './components/MyNotes';
import { NoteList } from './components/NoteList';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      Notes: [],
    };
  }

  componentDidMount() {
    this.setState({ Notes: lambdaNotes })
  }

  render() {
    const self = this;
    return (
      <div className="app-wrapper">
          <PageNavigator />
          <Switch />
          <Route 
          exact path="/"
          render={() => <NoteList Note={this.state.Notes} />} />
          <Route 
          path="/new" render={props => 
            <NewNoteForm {...props} {...this.state} parent={self}/> }  />
          <Route path="/note/:id" render={props => 
          <NoteItem {...props} {...this.state} /> } />
              <Route 
          path="/edit" render={props => 
            <EditNoteForm {...props} {...this.state} parent={self}/> }  />
      </div>
    );
  }
}

export default App;
