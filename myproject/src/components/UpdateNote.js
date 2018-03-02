import React from 'react';

const UpdateNote = (props) => {
    
        return (
            <form onSubmit={props.submitNote}>
                <input type="text" name="note" onChange={props.handleInput} placeholder='Note Title' value={props.noteValue} />
                <input type="text" name="details" onChange={props.handleInput} placeholder='Note Content' value={props.detailsValue} />
                
                <button type="submit">Update</button>
            </form>
        )
    }


export default UpdateNote;