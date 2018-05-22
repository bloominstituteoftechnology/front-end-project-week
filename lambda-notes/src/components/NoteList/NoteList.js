import React, { Component } from 'react';
import Title from '../Title';
import NoteCard from '../NoteCard';
import { notes } from '../../data/notes';

class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      notes: []
    }
  }
  componentDidMount(){
    this.setState({ notes:notes });
  }
  render() { 
    return ( 
      <div className="note-list">
        <Title title="Your Notes" />
        <div className="note-cards">
          {this.state.notes.map(note => <NoteCard key={note.id} note={note} />)}
        </div>
      </div>
     )
  }
}
 
export default NoteList;