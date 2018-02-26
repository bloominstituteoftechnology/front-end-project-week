import React from 'react';

const NoteList = (props) => {

        return (
            <div>
                <ul>
                    {props.notes.map((note) => {
                        return (
                            <li key={props.notes.indexOf(note)}>{note.note}
                            <p>{note.details}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }


export default NoteList;