import React from 'react';
import { Route } from 'react-router-dom';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
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

  render(){
    return(
      <div className="notes">
        <Route exact path="/" render={props => <NoteList {...props} notes={this.state.notes} />} />
        <Route exact path="/new" render={props => <NoteForm {...props} addNote={this.addNote} />} />
      </div>
    );
  }
}

export default NoteContainer;
