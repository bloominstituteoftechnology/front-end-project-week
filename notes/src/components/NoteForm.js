import React, { Fragment } from 'react';

function NoteForm(props) {
    function handleSubmit(event) {
        event.preventDefault();
        
        if (props.isUpdating) {
            props.handleUpdateNote();
        } else {
            props.handleAddNewNote(event);
        }
    }

  return (
    <Fragment>
        <h2>{props.isUpdating ? 'Update Note' : 'Add New Note'}</h2>
        <form>
            <div className="group">
                <input 
                    type="text" 
                    value={props.note.title} 
                    name="title" 
                    placeholder='Title'
                    onChange={props.handleChange} 
                />
            </div>
            <div className="group">
                <input 
                    type="text" 
                    value={props.note.textBody} 
                    name="textBody" 
                    placeholder='Note Body'
                    onChange={props.handleChange} 
                />
            </div>
            <div className="group">
                <input 
                    type="text" 
                    value={props.note.tags} 
                    name="tags"
                    placeholder='tags' 
                    onChange={props.handleChange} 
                />
            </div>
            <button className="submit-button" onClick={handleSubmit}>Submit</button>
        </form>
    </Fragment>
  );
}


export default NoteForm;
