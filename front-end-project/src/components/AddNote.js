import React from "react";


const AddNote = (props) => {

    return (
        <div>
          <div>
            <h3>Create New Note: </h3>
            <input type="text" onChange={props.changeHandler} value={props.addTitle} name="title" placeholder="Note Title"></input>
           </div>
            <div>
                <input type="text" onChange={props.changeHandler} value={props.addBody} name="textBody" placeholder="Note Content"></input>
            </div>
            <button onClick={props.addNewNote}>Save</button>
        </div>
    )
}

export default AddNote