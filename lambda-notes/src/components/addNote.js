import React, {  } from 'react';


export const AddNote = props => {
    const handleClick = (event) => {
        event.preventDefault();
        props.addNewNote(event);
        props.history.push("/");
    }
    //  onSubmit={props.addNewNote} 

    return (
        <div className="add-form-wrap" >
            <h3>Create New Note:</h3>
    <form  className="add-form" >
                <input className="add-title-input" placeholder="Note Title" name="title" onChange={props.handleInputChange} value={props.inputTitle} /> <br/>
                <textarea className="add-text-input" placeholder="Note Content" name="text" onChange={props.handleInputChange} value={props.inputText} />
                <div onClick={handleClick} className="save-btn" >Save</div>
            </form>
        </div>
    )
}