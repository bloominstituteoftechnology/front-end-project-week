import React from 'react';
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

const NoteFormEdit = (props) => {
    return (  
        <React.Fragment>
            {props.Redirect ? <Redirect to={`/note/${props.notes.id}`}/> : 
            <form onSubmit={props.editHandler}>
                <input type="text" placeholder="Note Title" onChange={props.handleEditChange} value={props.notes.title} name="title" />
                <input type="textarea" placeholder="Note Content" onChange={props.handleEditChange} value={props.notes.note} name="note" />
                <button type="submit">Update</button>
                <button onClick={props.editToggle}>Cancel</button>
            </form>
            }
        </React.Fragment>        
    );
}
 
export default NoteFormEdit;