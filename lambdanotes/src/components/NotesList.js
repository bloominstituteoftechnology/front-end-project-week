import React from 'react';

function NotesList(props) {
    if(!props.notesList || !props.notesList.length) {
        return <h1>Oh Notes! Where Are You?... Go Find Them!</h1>
    }
    return (
        <div className="noteWrap">
            <ul>
                {props.notesList.map(notemark => (
                    <li className="noteCard" key={notemark.id}>
                        <h2>{notemark.title}</h2>
                        <p>{notemark.textBody}</p>
                        onLClick={() => props.history.push(`.notes/${notemark.id}/info`)}

                    </li>
                ))}
            </ul> : null
            }
        </div>
    )
}
export default NotesList;