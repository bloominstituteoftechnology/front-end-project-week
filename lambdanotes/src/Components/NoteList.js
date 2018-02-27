import React from 'react';
import './notes.css';
const NoteList = (props) => {

        return (
            <div className="noteBox">
                <ul>
                    {props.notes.map((note) => {
                        return (
                            <li className="listBox" key={props.notes.indexOf(note)} onClick={props.viewNote}>{note.note}
                            <p>{note.details}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }


export default NoteList;