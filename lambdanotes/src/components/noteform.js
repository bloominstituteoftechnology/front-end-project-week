import React from 'react';
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

const NoteForm = (props) => {
    return (  
        <React.Fragment>
            {props.Redirect ? <Redirect to={'/'}/> : 
            <form onSubmit={props.addHandler}>
                <input type="text" placeholder="Note Title" onChange={props.handleNoteChange} value={props.notes.title} name="title" />
                <input type="textarea" placeholder="Note Content" onChange={props.handleNoteChange} value={props.notes.note} name="note" />
                <button>Save</button>
                <Link to={`/`}><button>Cancel</button></Link>
            </form>
            }
        </React.Fragment>        
    );
}
 
export default NoteForm;