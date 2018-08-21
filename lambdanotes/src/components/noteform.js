import React from 'react';

const NoteForm = (props) => {
    return (  
        <form>
            <input type="text" placeholder="Note Title" onChange={props.handleTaskChange} value={props.notes.title} name="title" />
            <input type="text" placeholder="Note Content" onChange={props.handleTaskChange} value={props.notes.note} name="note" />
            <button>{props.btntext}</button>
        </form>
    );
}
 
export default NoteForm;