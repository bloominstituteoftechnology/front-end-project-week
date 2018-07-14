import React, { Component } from 'react';
import '../index.css';

class NotesContent extends Component {
    render() {
        // read from local storage.
        const notes = JSON.parse(localStorage.getItem("notes"));
        console.log(notes);

        if(notes != undefined)
        {
            return (
                <div className="notes-container">
                    {
                        notes.map((note) => {
                            return (
                                <div className="note">
                                    <div className="note-options">
                                        <div className="note-option option-delete">
                                            Delete
                                        </div>
                                        <div className="note-option option-edit">
                                            Edit
                                        </div>
                                    </div>
                                    <div className="title">
                                        {note.title}
                                    </div>
                                    <div className="description">
                                        {note.desc}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            );
        }
        else
        {
            return(
                <div className="notes-container">
                    <h1> No Notes to Display! </h1>
                </div>
            )
        }
    }
}

export default NotesContent;