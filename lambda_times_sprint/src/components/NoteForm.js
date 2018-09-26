import React from 'react';

function NoteForm(props) {
  return (
        <form>
            <div className="group">
            <h2>Create New Note:</h2>
            <h2>Edit Note:</h2>
                <input 
                    type="text" 
                    placeholder="Note title"
                    value={props.title} 
                    name="title" 
                    onChange={props.handleInputChange} 
                />
            </div>
            <div className="group">
                <textarea rows="10" cols="30" 
                    type="text" 
                    placeholder="Note Content"
                    value={props.textBody} 
                    name="textBody" 
                    onChange={props.handleInputChange} 
                />
            </div>
          
            <button className="material-button-raised" onClick={props.handleAddNewNote}>Save</button>
            <button className="material-button-raised" onClick={props.handleEditNote}>Update</button>
        </form>
      
  );
}

export default NoteForm;