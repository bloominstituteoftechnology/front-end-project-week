import React from 'react';
import {Link} from 'react-router-dom';
import '../CSS/newnote.css';


const NewNote = (props) => {
    return(
        <div className="notes-container">
            <h1 className="yournotes">Create New Note:</h1>
            <div className="input">
                <input onChange={props.noteInput} name="newtitle" className="input-title" placeholder="Note Title"/>
                <textarea onChange={props.noteInput} name="newbody" className="input-body" placeholder="Note Content"/>
                <Link className="save" to="/"><button onClick={props.noteSubmit} >Save</button></Link>
            </div>
        </div>
    )
}

export default NewNote;