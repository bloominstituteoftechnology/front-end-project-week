import React from 'react';
// import {NavLink} from 'react-router-dom';


const NoteView = props => {
    console.log('noteview props:', props);
    console.log('noteview propsnotes:', props.notes)
    // eslint-disable-next-line
    const note = props.notes.find(note => note.id == parseInt(props.match.params.id, 10));
    console.log('from noteview:', note);
    
    return (
        <div>
            {/* <NavLink>
                <button onClick={() => props.updateNote(Number(note.id))}>edit</button>
            </NavLink> */}
            <div>
                <button onClick={()=>props.deleteNote(note.id)}>delete</button>
            </div>            
            <div>
                <h2>{note.title}</h2>
                <p>{note.content}</p>
            </div>    
        </div>
    )
}


export default NoteView;
