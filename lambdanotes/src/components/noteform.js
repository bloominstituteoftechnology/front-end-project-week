import React from 'react';

const NoteForm = (props) => {
    console.log(props)
    return (  
        <form>
            <input type="text" placeholder="Note Title" onChange={props.handleTaskChange} value={props.notes.title}/>
            <input type="text" placeholder="Note Content" onChange={props.handleTaskChange} value={props.notes.note}/>
            <button>{props.btntext}</button>
        </form>
    );
}
 
export default NoteForm;