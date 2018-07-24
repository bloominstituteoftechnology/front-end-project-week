import React from 'react';

const ListView = (props) => {
    return (
        <div className='list-view'>
            <h3>Your Notes:</h3>
            <div className='tiles'>
                {props.notes.map(note => {
                    return (
                        <div className='tile'>
                            <h4>{note.title}</h4>
                            <p>{note.textBody}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListView