import React, { Component } from 'react';
import Note from './Note'
import { Link } from 'react-router-dom'

class Notelist extends Component {
    state = {
        notes: this.props.notes
    }

    render() {
      return (
        <div className='main-page'>
            <p>-- List of notes --</p>
            <div className="noteList">
                {this.props.notes.map(note => {
                    return (
                        <div className="note" key={note._id}>
                            <Link to={`/notes/${note._id}`}>{note.title}</Link>
                        </div>
                    )
                })}
            </div>
        </div>
      )}
}

export default Notelist;