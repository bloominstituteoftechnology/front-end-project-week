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

  componentDidUpdate() {
    let listHeight = window.getComputedStyle(document.getElementById('list')).getPropertyValue('height');
    listHeight = Number(listHeight.substring(0, listHeight.length - 2));
    const windowHeight = document.documentElement.clientHeight;
    document.getElementById('App').style.height = listHeight > windowHeight ? `${listHeight}px` : '100%';
  } 

  render() {
    return (
      <div className="list" id="list">
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
