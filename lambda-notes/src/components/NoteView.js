import React from 'react';
import {NavLink} from 'react-router-dom';


const NoteView = props => {
    console.log('noteview props:', props);
    console.log('noteview propsnotes:', props.notes)
    // eslint-disable-next-line
    const note = props.notes.find(note => note.id == parseInt(props.match.params.id, 10));
    console.log('from noteview:', note);
    
    return (
        <div>
            <div>
            <NavLink to={`/edit-view/${note.id}`}>
                <div onClick={() => props.editNote(note.id)}>edit</div>
            </NavLink>
                <NavLink to="/list-view">
                    <div onClick={()=>props.deleteNote(note.id)}>delete</div>
                </NavLink>
            </div>            
            <div>
                <h2>{note.title}</h2>
                <p>{note.content}</p>
            </div>    
        </div>
    )
}


export default NoteView;
