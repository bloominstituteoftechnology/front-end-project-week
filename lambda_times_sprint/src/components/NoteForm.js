import React from 'react';

function NoteForm(props) {
    const btnLabel = props.type === "edit" ? "Update" : "Save";
    const clickHandler = props.type === "edit" ? props.handleEditNote : props.handleAddNewNote;
  return (
      
        <form>
            <h2 className="create-note">{props.type === "edit" ? "Edit Note:" : "Create New Note:"}</h2>
            <div className="group-1">
                <input 
                    type="text" 
                    placeholder="Note title"
                    maxLength="40"
                    value={props.title} 
                    name="title" 
                    onChange={props.handleInputChange} 
                />
            </div>
            <div className="group-2">
                <textarea rows="25" cols="75" 
                    type="text" 
                    placeholder="Note Content"
                    maxLength="1000"
                    value={props.textBody} 
                    name="textBody" 
                    onChange={props.handleInputChange} 
                />
            </div>
          
            <button className="save-update-btn" onClick={clickHandler}>{btnLabel}</button>
            
        </form>
      
  );

}

export default NoteForm;