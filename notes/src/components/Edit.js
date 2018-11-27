import React from 'react'; 
import './CreateNew.css'; 
import axios from 'axios'; 

export const Edit = (props) => {
 
  if (props.notes.length) {
    let note = props.notes.find(
     note => `${note._id}` === props.match.params.id
   );
  const push = () => {
   props.history.push(`/note/${note._id}`)
 }
 
 const updateNoteHandler = e => {
   e.preventDefault();
   props.updateNote(note._id)
   setTimeout( push , 50)
   
 }

  
    return(
      <div>
        <h3>Edit Note:</h3> 
        <form onSubmit={updateNoteHandler}>
          <input onChange={props.inputChange} value={props.newNote.title} name="title" placeholder="Note Title" className='input' type='text'/>
          <input onChange={props.inputChange} name="textBody" value={props.newNote.textBody} placeholder="Note Content" className="text-area" type='text'/> 
          <button type="submit" className="buttonTwo">Update</button> 
        </form> 
      </div> 
    )
    }
  }
