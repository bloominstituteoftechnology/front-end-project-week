import React from 'react';

const ListView = (props) => {
    return (
        <div>
            <h3>Your Notes:</h3>
            <div>
                {props.notes.map(note => {
                    return (
                        <div>
                            <h4>{note.title}</h4>
                            <span>{note.textBody}</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListView