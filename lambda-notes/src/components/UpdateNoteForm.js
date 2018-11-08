import React from 'react';

const UpdateNoteForm = props => {

  
    // export const handleSubmitUpdate = event => {
   
    //   event.preventDefault();
    //   props.updateNote(props.match.params._id);   
     
    // };

        return (
    <div className = "NoteForm">
        <form onSubmit={props.updateNote(props.match.params._id)}>
          <input
            onChange={props.handleInputChange}
            placeholder="title"
            value={props.note.title}
            name="title"
          />
          <input
            onChange={props.handleInputChange}
            placeholder="textBody"
            value={props.note.textBody}
            name="textBody"
          />
          <input
            onChange={props.handleInputChange}
            placeholder="tags"
            value={props.note.tags}
            name="tags"
          />
          <button type="submit">Submit Change Note</button>
        </form>
    </div>
        )
    }
  

  export default UpdateNoteForm;