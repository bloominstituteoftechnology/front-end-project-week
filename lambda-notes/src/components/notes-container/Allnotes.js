import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AllNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        this.setState(() => ({ notes: response.data }));
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }

  render() {
    return (
      <div className="notes-list">
        {this.state.notes.map(note => (
         <Link to={`/notes/${note._id}`} key={note._id}>
          <SingleNoteDetails
          key={note._id} 
          note={note}/>
         </Link>
        ))}
      </div>
    );
  }
}

function SingleNoteDetails({ note }) {
  const { title, textBody } = note;
  return (
    <div className="note-card">
      <div className="note-title">
        <h2>{title}</h2>
        </div>
        <div className="note-body">
          <p>{textBody}</p>
        </div>
      <div className="save-button">Save</div>
      </div>
  );
}
