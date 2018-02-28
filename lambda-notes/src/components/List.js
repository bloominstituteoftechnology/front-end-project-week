import React, { Component } from 'react';
import axios from 'axios';
import NoteItem from './NoteItem';
import './List.css';

class List extends Component {
  state = {
    notes: [],
  };
  
  componentDidMount() {
    axios.get('http://localhost:4444/notes').then((response) => {
      this.setState(() => ({ notes: response.data }));
    })
    .catch((error) => {
      alert('Server error: Please try again later.');
    });
  }

  render() {
    return (
      <div className="list">
        <div className="list__notes-header">Your Notes:</div>
        <div className="list__notes-grid">
          {this.state.notes.map((note) => {
            return <NoteItem key={note.id} id={note.id} title={note.title} content={note.content} />; 
          })}
        </div>
      </div>
    );
  }
}

export default List;
