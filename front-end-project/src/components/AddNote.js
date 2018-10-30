import React from "react";
import './component.css'

const AddNote = (props) => {

    const addtoList = () => {
        props.addNewNote();
        props.history.push("/note-list")
        
    }

    return (
        <div className="input-container">
        <form onSubmit={addtoList}>
          <div className="new-note-input">
            <h3>Create New Note: </h3>
            <input className="input-field" type="text" onChange={props.changeHandler} value={props.addTitle} name="title" placeholder="Note Title"></input>
           </div>
            <div className="text-area">
                <textarea 
                    className="text-field"
                    type="text" 
                    onChange={props.changeHandler}
                    value={props.addBody}
                    name="textBody"
                    placeholder="Note Content"
                    cols="45"
                    rows="10" />
            </div>
            <button className="save-btn" onClick={addtoList}>Save</button>
        </form>
        </div>
    )
}

export default AddNote