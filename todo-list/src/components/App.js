import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import '../styles/App.css';
import { notes } from '../notes';
import { NoteList } from './NoteList';
import { NoteView } from './NoteView';
import { NoteForm } from './NoteForm';


class App extends Component {
  state = { notes: notes };
  render() {
    return (
      <div className="App">
        <div className="App_sideBar">
          <h3>Lambda<br/>Notes</h3>
          <Link to="/" className="App_button">View Your Notes</Link>
          <Link to="/create" className="App_button">+Create New Note</Link>
        </div>
        <div className="App_body">
          <Route exact path="/" render={() =>
            <NoteList notes={this.state.notes}/> 
          }/>
          <Route path="/view/:id" render={props => 
            <NoteView {...props} notes={this.state.notes}/> 
          }/>
          <Route path="/create" component={props => 
            <NoteForm formUse="Create New Note"/> 
          }/>
          <Route path="/edit/:id" component={props => 
            <NoteForm formUse="Edit Note"/> 
          }/>
        </div>
      </div>
    );
  }
}

export default App;
