import React from 'react';
import './notesList.css';


const NotesList = props => {
    return (
        <div className="notes-container">
            <div><h3 className="content-header">Your Notes:</h3></div>
        <div className="all-notes">
            <div className="note">
                <div>
                    {props.notesArray.map((note,index) => {
                        return (
                            <div>
                                <h4 key={index}>{note.title}</h4>
                                <hr></hr>
                                <p>{note.textBody}</p>
                            </div>
                        )
                    })};
                </div>
            </div>
            <div className="note">
                <div>
                    <h4>Note Title</h4>
                    <hr></hr>
                    <p>Some text for a note.</p>
                </div>
            </div>
            <div className="note">
                <div>
                    <h4>Note Title</h4>
                    <hr></hr>
                    <p>Some text for a note.</p>
                </div>
            </div>
            <div className="note">
                <div>
                    <h4>Note Title</h4>
                    <hr></hr>
                    <p>Some text for a note.</p>
                </div>
            </div>
        </div>
        </div>
    );
}

export default NotesList;