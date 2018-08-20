import React from 'react';
import { Route } from 'react-router-dom';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import NotePage from './NotePage';
import dummyData from '../dummy-data';

class NoteContainer extends React.Component {
  constructor(){
    super();
    this.state = {
      notes: [],
    }
  }

  componentDidMount(){
    this.setState({notes: dummyData});
  }

  addNote = note => {
    const notes = this.state.notes.slice();
    note.id = this.state.notes[this.state.notes.length - 1].id + 1;
    notes.push(note);
    this.setState({notes});
  }

  getNote = id => {
    return this.state.notes.find(note => note.id === Number(id));
  }

  updateNote = newNote => {
    const newNotes = this.state.notes.map(note => {
      if(note.id === newNote.id){
        return newNote
      } else{
        return note
      }
    });
    this.setState({notes: newNotes});
  }

  render(){
    return(
      <div className="notes">
        <Route exact path="/" render={props => <NoteList {...props} notes={this.state.notes} />} />
        <Route exact path="/new" render={props => <NoteForm {...props} addNote={this.addNote} />} />
        <Route exact path="/note/:id" render={props => <NotePage {...props} getNote={this.getNote} /> } />
        <Route path="/note/:id/edit" render={props => <NoteForm {...props} getNote={this.getNote} updateNote={this.updateNote} editing />} />
      </div>
    );
  }
}

export default NoteContainer;
