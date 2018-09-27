import  React from 'react';
import './Note.css';

const DeleteNote = props =>{
    
    return (
        <div className="delete-note">
            {/* {console.log(props)} */}
            <h1>Are you sure you want to delete this note?</h1>
                
            <button className="delete-yes-button"
                    onClick={event=>props.handleDeleteNote(event)}>Yes</button>
            <button className="delete-no-button"
                    onClick={()=>props.history.push(`/note/${props.id}`)}>No</button>
        </div>
      
    )
}

export default DeleteNote;