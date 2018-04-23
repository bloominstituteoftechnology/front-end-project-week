import React from "react";

 const Notes = props => {
    console.log("porps", props);
    
    return(<React.Fragment>
     {props.notes.map(note =>( <div>
        <div>{note.title}</div>
        <div>{note.textbody}</div>
        </div>
   ))}
     </React.Fragment>)
}
export default Notes