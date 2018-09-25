import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NoteList extends Component {
    state = {
        notes: this.props.notes
    }

    render() {
      return (
        <div className='main-page'>
            <p>Your notes:</p>
            <div className="noteList">
                {this.props.notes.map(note => {
                    return (
                        <div className="notes" key={note._id}>
                            <Link to={`/notes/${note._id}`}>
                                <h4>{note.title}</h4>
                                <hr></hr>
                                <p>{note.textBody}</p>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
      )}
}

export default NoteList;