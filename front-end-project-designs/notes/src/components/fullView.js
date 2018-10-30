import React from "react";
import NoteView from './noteView';
const FullView = props=>{
    return(
        props.notes.map((note)=>{
            return(
                <NoteView note={note}/>
            )
        })
    )
}
export default NoteView;