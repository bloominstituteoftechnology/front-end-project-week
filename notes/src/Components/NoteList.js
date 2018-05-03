import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class NoteList extends Component {
  state = {
    notes: [],
  }
  componentDidMount() {
      axios.get('http://localhost:5005/notes')
      .then(response => {
        this.setState({ notes: response.data })
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="notes-container">
        <h2>Your Notes:</h2>
        <ul className="notes-list">
          {this.state.notes.map((note, i) => {
            return(
              <Link key={i} to={`note/${note.id}`} className="note-card">
                <li className="note-item">
                  <h3 className="note-card-title">
                    {note.title.substring(0, 19)}
                  </h3>
                  <hr/>
                  <p className="note-card-content">
                    {note.content.substring(0, 120)} ...
                  </p>
                </li>
              </Link>
            );
          })}
        </ul>  
      </div>
    );
  }
}

export default NoteList;