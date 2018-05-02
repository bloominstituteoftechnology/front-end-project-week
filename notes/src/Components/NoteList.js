import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class NoteList extends Component {
  state = {
    notes: [
      {title: 'Note', content: 'placeholder text'},
      {title: 'Note', content: 'placeholder text'},
      {title: 'Note', content: 'placeholder text'},
      {title: 'Note', content: 'placeholder text'},
      {title: 'Note', content: 'placeholder text'},
      {title: 'Note', content: 'placeholder text'},
      {title: 'Note', content: 'placeholder text'},
      {title: 'Note', content: 'placeholder text'},
      {title: 'Note', content: 'placeholder text'},
    ]
  }
  render() {
    return (
      <div className="notes-container">
        <h2>Your Notes:</h2>
        <ul className="notes-list">
          {this.state.notes.map((note, i) => {
            return(
              <Link to={`note/${i}`} className="note">
                <li>
                  <p>{note.title}</p>
                  <hr/>
                  <p>{note.content}</p>
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