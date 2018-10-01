import React from 'react';

function NotesList(props) {
    if(!props.notesList || !props.notesList.length) {
        return <h1>Oh Notes! Where Are You?... Go Find Them!</h1>
    }
    return (
        <div className="noteWrap">
            <ul>
                {props.notesList.map(note => (
                    <li className="noteCard" key={note.id}>
                        <h2>{note.title}</h2>
                        <p>{note.textBody}</p>
                        <h2 onClick={() => props.history.push(`.notes/${note.id}/info`)}>{note.title}</h2>
                    </li>
                ))}
            </ul> : null
            }
        </div>
    )
}
export default NotesList;