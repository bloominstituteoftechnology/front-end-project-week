import React from 'react';

const ListView = (props) => {
    return (
        <div className='list-view'>
            <h3>Your Notes:</h3>
            <ul>
                {props.notes.map(note => {
                    return (
                        <div className='note'>
                            <h5>{note.title}</h5>
                            <p>{note.content}</p>
                        </div>    
                    )
                })}
            </ul>
        </div>
    );
}
 
export default ListView;