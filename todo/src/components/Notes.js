import React, {Component} from 'react';
import axios from 'axios';

import Note from './Note';

class Notes extends Component { 

    deleteNote = (id) => {
        axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
        .then (response => {
            this.setState({notes: response.data})
        })
    }

    render() {
        return (
            <div className="notes">
                <h1>List of notes goes here</h1>
                <p>
                    {this.props.notes.map(note => {
                        return (
                            <div className="notes-div">
                                <Note 
                                tags={note.tag}
                                title={note.title}
                                textBody={note.textBody}
                                id={note._id}
                                />
                                 <button className="button" type="x" onClick={event => this.deleteNote(note._id)}>Delete note</button>
                            </div>
                        )
                    })}
                </p>
            </div>
        )
    }
}

export default Notes