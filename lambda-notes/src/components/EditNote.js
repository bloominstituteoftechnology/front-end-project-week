import React from "react";

 
const EditNote = (props) => {
    const handleClick = (event) => {
        event.preventDefault();
        props.editNote(event, props.note.id);
   }

    

    
   
        return (
            <div className='add-note'>
                <h2>Edit Note:</h2>
                <form>
                   <input name="title" onChange={props.handleInputChange} value={props.title} />
                   <textarea name="text" onChange={props.handleInputChange} value={props.text} />
                   <button onClick={handleClick}>Update</button>
               </form>
           </div>
        )  
    
}


export default EditNote;