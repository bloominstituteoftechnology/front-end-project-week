import React from 'react';

function NoteForm(props) {
    function handleSubmit(event) {
        // event.preventDefault();
            props.handleAddNewNote();
    }

  return (
        <form>
            <div className="group">
            <h2>Create New Note:</h2>
                <input 
                    type="text" 
                    placeholder="Note title"
                    value={props.note.title} 
                    name="title" 
                    onChange={props.handleChange} 
                />
            </div>
            <div className="group">
                <textarea rows="10" cols="30" 
                    type="text" 
                    placeholder="Note Content"
                    value={props.note.textBody} 
                    name="textBody" 
                    onChange={props.handleChange} 
                />
            </div>
          
            <button className="material-button-raised" onClick={handleSubmit}>Save</button>
        </form>
   
  );
}

export default NoteForm;