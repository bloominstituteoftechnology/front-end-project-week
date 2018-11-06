import React from 'react'

const EditNote = (props) => {
    return ( 
        <div>
            <form>
                <input type="text"
                    placeholder="Edit Title"
                    value={props.editTitle}
                    name="editTitle"
                    onChange={props.changeHandler}
                />
                <input type="text"
                    placeholder="Edit Comment"
                    value={props.editTextBody}
                    name="editTextBody"
                    onChange={props.changeHandler}
                />
                <button onClick={props.EditNote}>Save</button>
            </form>
        </div>
     );
}
 
export default EditNote;