import React from 'react';

function Notes(props) {

    return (
        <div>
            {props.notes.map(note => {
                return (
                    <div>
                        <h2>{note.tags}</h2>
                        <h3>{note.title}</h3>
                        <p>{note.textBody}</p>
                    </div>
                )}
            )}
        </div>
    )

}

export default Notes;
