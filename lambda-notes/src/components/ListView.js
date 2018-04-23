import React from "react";
 const Notes = props => {
    console.log("porps", props);
    
    return <div>{props.notes.map(note => <div>{`${note.title} ${note.textbody}`}</div>)}</div>
}
export default Notes