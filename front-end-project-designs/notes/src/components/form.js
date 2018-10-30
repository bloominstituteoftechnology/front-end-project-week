import React from "react";
const Form = props =>{
    return(
        <form>
            Title
            <input name='title' placeholder='title' onChange={props.handleChanges}></input>
            Note:
            <input name ='textBody' placeholder=' Enter note' onChange={props.handleChanges}></input>
            <button onClick={props.addNewNote}>Add Note</button>
        </form>
    )
}
export default Form;