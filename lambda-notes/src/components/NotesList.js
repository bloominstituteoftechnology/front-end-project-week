import React from 'react';
import { Link } from 'react-router-dom';
let maxLenBody = 133;
let maxLenTitle = 12;

const NotesList = props => {

    return(
        <section className="notes-list">
            <div>
                <h1>Your notes</h1>
            </div>
            <div className="notes-wrapper">
                {props.notes.map((note, index) => {
                    return (
                        <div key={index} className="card">
                            <Link to={`/note/${note._id}`} >

                                <div className="card-wrapper">

                                    <h2 className="note-title">
                                    {note.title.length > maxLenTitle ?
                                        note.title.slice(0, maxLenTitle).concat('...').toLowerCase()
                                    :
                                    note.title.toLowerCase()
                                        
                                    }

                                    </h2>

                                    <p className="note-textBody">
                                    {note.textBody.length > maxLenBody ?
                    
                                    note.textBody.slice(0,maxLenBody).concat('...') :

                                    note.textBody

                                    }
                                    </p>
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