import React from 'react';
 
 
export const AddNote = props => {
    const handleClick = (event) => {
        event.preventDefault();
       props.addNewNote(event);
       props.history.push("/");
   }

    return (
       <div className="Container AddNote" >
            <h3 className="Header">Create New Note:</h3>
              <form  className="add-form" >
                <input className="title-input" placeholder="Title" name="title" onChange={props.handleInputChange} value={props.inputTitle} /> <br/>
                <textarea className="text-input" placeholder="Content" name="text" onChange={props.handleInputChange} value={props.inputText} />
                <div onClick={handleClick} className="save-btn" >Save</div>
              </form>
        </div>
    )
}

export default AddNote;