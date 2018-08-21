import React from 'react';
import { Redirect } from "react-router-dom";

const NoteForm = (props) => {
    return (  
        <React.Fragment>
            {props.Redirect ? <Redirect to={'/'}/> : 
            <form onSubmit={props.addHandler}>
                <input type="text" placeholder="Note Title" onChange={props.handleTaskChange} value={props.notes.title} name="title" />
                <input type="text" placeholder="Note Content" onChange={props.handleTaskChange} value={props.notes.note} name="note" />
                <button>{props.btntext}</button>
            </form>
            }
        </React.Fragment>        
    );
}
 
export default NoteForm;