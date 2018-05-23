import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ListView from './ListView/ListView';
import Navigation from './Navigation/Navigation';
import NoteView from './NoteView/NoteView';
import EditView from './EditView/EditView';
import DeleteView from './DeleteView/DeleteView';
import CreateNoteView from './CreateNote/CreateNoteView';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      notes: [{
        title: 'Note Title',
        content: 'blah blah blah blah blah blah blah',
        id: 0,
      },{
        title: 'Note Title',
        content: 'blah blah blah blah blah blah blah',
        id: 1,
      },{
        title: 'Note Title',
        content: 'blah blah blah blah blah blah blah',
        id: 2,
      },{
        title: 'Note Title',
        content: 'blah blah blah blah blah blah blah',
        id: 3,
      }],
    }
  }

  render() {
    return (
      <div className="App">
        <Route path="/" component={Navigation}/>
        <Route path="/home" render={(props) => {
          return <ListView notes={this.state.notes}/>
        }}/>
        <Route path="/note/view" component={NoteView}/>
        {/* <Route path="/note/:id" component={NoteView}/> */}
        <Route path="/note/view" component={DeleteView}/>
        <Route path="/note/create" render={(props) => {
          return <CreateNoteView notes={this.state.notes}/>
        }}/>
        <Route path="/note/edit" component={EditView}/>
      </div>
    );
  }
}

export default App;
