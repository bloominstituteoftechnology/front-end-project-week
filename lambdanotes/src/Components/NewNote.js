import React from 'react';
import './newnote.css';
const NewNote = (props) => {
    
        return (
            <div className="mainContent">
            <form onSubmit={props.submitNote}>
                <h1> Create New Note: </h1>
                <div className="createNoteStyles">
                <input type="text" name="note" onChange={props.handleInput} placeholder="New Note" value={props.noteValue} className="formBox1"/>
                <br />
                <input type="text" name="details" onChange={props.handleInput} placeholder="Note Details" value={props.detailsValue} className="formBox2"/>
                
                <button type="submit" className="saveNote">Save</button>
                </div>
            </form>
            </div>
        )
    }


export default NewNote;