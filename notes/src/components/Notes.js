import React from 'react';
import Note from './Note';

let Notes = props => {
    return (
        <div className="container">   
            <h1>Your Notes:</h1>
            <div className='notes'>
                {props.notes.map(note => <Note key={note._id} note={note} deleteHandler={props.deleteHandler}/>)}
            </div>
        </div>  
    )
}

export default Notes;