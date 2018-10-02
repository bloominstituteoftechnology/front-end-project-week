import React from 'react';
 
export const AddNote = (props) => {
    const handleClick = (event) => {
        event.preventDefault();
        props.addNote(event);
   }

    return (
       <div>
            <h3>Create New Note:</h3>
              <form>
                <input  
                    placeholder="title"
                    name="title" 
                    onChange={props.handleInputChange} 
                    value={props.title}
                />
                <textarea
                    placeholder="text" 
                    name="text" 
                    onChange={props.handleInputChange} 
                    value={props.text} />
                <button onClick={handleClick}>Save</button>
              </form>
        </div>
    )
}

export default AddNote;