import React from "react"
const NoteView = props =>{
    console.log(props)
    return(
        <div>
            Title: {props.note.title}
            Text: {props.note.textBody}
            id: {props.note._id}
        </div>
    )
}
export default NoteView