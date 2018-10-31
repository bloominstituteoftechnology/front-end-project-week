import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Note from './Note';

class Notes extends Component {
  render() {
    return (
      <div className="notes-container">
        {this.props.notes.map(note => {
            return (
                <div className="notes" key={note._id}>
                    <Link to={`/notes/${note._id}`}>
                        <Note 
                        title={note.title} 
                        content={note.textBody}
                        />
                    </Link>
                </div>
            )
        })}
      </div>
    )
  }
}

export default Notes;