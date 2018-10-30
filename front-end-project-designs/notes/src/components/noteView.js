import React from "react"
const NoteView = props =>{
    console.log(props)
    return(
        <div>
            Title: {props.note.title}
            Text: {props.note.textBody}
        </div>
    )
}
export default NoteView