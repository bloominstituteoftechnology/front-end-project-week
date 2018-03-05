import React from 'react';

const UpdateNote = (props) => {
   
    
        return (
            <div className="mainContent">
            <form onSubmit={props.submitNote}>
                <h1> Update Note: </h1>
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


export default UpdateNote;