import React from 'react';
import { Redirect } from "react-router-dom";

const NoteFormEdit = (props) => {

    return (  
        <React.Fragment>
            {props.Redirect ? <Redirect to={'/'}/> : 
            <form onSubmit={props.editHandler}>
                <input type="text" placeholder="Note Title" onChange={props.handleEditChange} value={props.notes.inputTitle} name="inputTitle" />
                <input type="textarea" placeholder="Note Content" onChange={props.handleEditChange} value={props.notes.inputNote} name="inputNote" />
                <button>Update</button>
            </form>
            }
        </React.Fragment>        
    );
}
 
export default NoteFormEdit;