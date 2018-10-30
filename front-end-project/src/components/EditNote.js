import React from "react";


const EditView = ({changeHandler, title, textBody, notes, editNote, note}) => {
    console.log("props id editview", notes._id)
    
    return (
        <div>
        <div className="input-container">
        <form>
          <div className="new-note-input">
            <h3>Edit Note: </h3>
            <input className="input-field" type="text" onChange={changeHandler} value={title} name="title" placeholder="Note Title"></input>
           </div>
            <div className="text-area">
                <textarea 
                    className="text-field"
                    type="text" 
                    onChange={changeHandler}
                    value={textBody}
                    name="textBody"
                    placeholder="Note Content"
                    cols="45"
                    rows="10" />
            </div>
            <button onClick={()=>editNote(notes)} className="save-btn">Update</button>
        </form>
        </div>
        </div>
    )
}

export default EditView
