import React from 'react';
import { Link } from 'react-router-dom';

const NotesList = props => {

    return(
        <section>
            <h1>Your notes</h1>
            <div className="notes-wrapper">
                {props.notes.map((note, index) => {
                    return (
                        <div key={index} className="card">
                            <Link to={`/note/${note._id}`} >

                                <h2 className="note-title">
                                    {note.title}
                                </h2>
                                <div className="note-textBody">
                                    {note.textBody}
                                </div>
                                
                            </Link>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default NotesList;