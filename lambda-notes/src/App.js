import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import CreateNoteView from './views/CreateNoteView';
import EditNoteView from './views/EditNoteView';
import NoteView from './views/NoteView';
import NotesListView from './views/NotesListView';
import Sidenav from './components/Sidenav';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      note: {
        '_id': '',
        'title': '',
        'textBody': ''
      }
    }
  }
  render() {
    return (
      <div className="App">
      <Sidenav/>
      <Switch>
      <Route exact path='/' 
            render = {props =>
               <NotesListView {...props}
                />} />
      <Route path='/create-note' component={CreateNoteView} />
      <Route path='/note/:_id' render={(props) => (<NoteView {...props} note={this.note} />)} />
      <Route path='/edit-note/:_id' component={EditNoteView} />
      </Switch>




      </div>
    );
  }
}

export default App;
