import React from "react";
import {Link, Route} from "react-router-dom";

const NoteView = (props) => {
 return (
     <div>
        <Link>edit</Link>
        <Link>edit</Link>
        <h3>{}</h3>
        <p>{}</p>
     </div>
 )
}

export default NoteView;