import React from 'react';

const ListView = (props) => {
    return (
        <div className='list-view'>
            <h1>Your Notes:</h1>
            <ul className='note-list'>
                {props.notes.map(note => {
                    return (
                        <div key={Math.random()} className='note'>
                            <h1>{note.title}</h1>
                            <hr />
                            <p>{note.content}</p>
                        </div>    
                    )
                })}
            </ul>
        </div>
    );
}
 
export default ListView;