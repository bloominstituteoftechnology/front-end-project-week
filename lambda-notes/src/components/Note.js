import React from 'react';
import { NavLink } from 'react-router-dom';
import { NoteWrapper } from '../style';

const Note = props => {
    const note = props.notes.find( note  => { return props.match.params.id === `${note._id}`})
        console.log(note)
    return (
        <NoteWrapper>
            {/* <NavLink to='/edit-note/:_id'>Edit</NavLink> */}
            
               <NavLink to={`/edit-note/${note._id}`}> <button>Edit</button></NavLink>
               <button onClick={() => { 
                  
                                props.delete(props.match.params.id)
                                props.history.push('/')
                            }
                                }>X</button>
                
            <h2>{note.title}</h2>
            <p>{note.textBody}</p>
        </NoteWrapper>
    );
}

export default Note