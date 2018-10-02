import React from 'react';
import { Link } from 'react-router-dom';

function NoteForm(props) {
    return (
        <div className="noteform-div">
            <form onSubmit={props.postNote}>
                <input 
                type="text" 
                placeholder="title" 
                name="inputTextTitle" 
                onChange={props.handleChange} 
                value={props.textTitle}/>
                <input 
                type="text"
                placeholder="notes here"
                name="inputTextBody" 
                onChange={props.handleChange} 
                value={props.textBody}/>
                {/* <Link to="/notes"> */}
                <button type="submit">Make Note</button>
                {/* </Link> */}
            </form>
        </div>
    )
}


export default NoteForm;