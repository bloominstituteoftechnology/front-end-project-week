import React, { Component } from 'react';
import Title from '../Title';
import NoteCard from '../NoteCard';
import axios from 'axios';

class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      notes: []
    }
  }
  componentDidMount(){
    axios.get('http://localhost:5000/notes')
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.error(error));
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