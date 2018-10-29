import React from "react";


const AddNote = (props) => {

    return (
        <div>
          <div>
            <h3>Create New Note: </h3>
            <input onChange={props.changeHandler} value={props.addTitle} name="addTitle" placeholder="Note Title"></input>
           </div>
            <div>
                <input onChange={props.changeHandler} value={props.addBody} name="addBody" placeholder="Note Content"></input>
            </div>
            <button onClick={props.addNewNote}>Save</button>
        </div>
    )
}

export default AddNote