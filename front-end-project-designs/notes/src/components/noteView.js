import React from "react"
const NoteView = props =>{
    console.log(props)
    return(
        <div>
            Title: {props.note.title}
            Text: {props.note.textBody}
            id: {props.note._id}
            <button>Edit</button>
            <button onClick={()=>props.handleDelete(props.note._id)} >Delete</button>
        </div>
    )
}
export default NoteView