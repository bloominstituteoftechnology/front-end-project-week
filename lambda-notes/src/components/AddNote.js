import React from 'react';
 
export const AddNote = (props) => {
    const handleClick = (event) => {
        event.preventDefault();
        props.addNote(event);
   }

    return (
       <div className='add-note'>
            <h2>Create New Note:</h2>
              <form>
                <input  
                    placeholder="Note Title"
                    name="title" 
                    onChange={props.handleInputChange} 
                    value={props.title}
                />
                <textarea
                    placeholder="Note Content" 
                    name="text" 
                    onChange={props.handleInputChange} 
                    value={props.text} />
                <button onClick={handleClick}>Save</button>
              </form>
        </div>
    )
}

export default AddNote;