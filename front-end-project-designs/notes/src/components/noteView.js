import React from "react";
import {Link}from "react-router-dom";
const NoteView = props =>{
    console.log(props)
    return(
        <div>
            <Link to = {`/notes/${props.note._id}`}>Title: {props.note.title}</Link>
            
            Text: {props.note.textBody}
            id: {props.note._id}
        </div>
    )
}
export default NoteView