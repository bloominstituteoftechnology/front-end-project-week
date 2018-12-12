import React from "react";
import './index.css';
import {Link} from "react-router-dom";



const Note = (props) => {
        return(
            <div name={props.id} className="note">
                <p>{props.title}</p>
                <p>{props.textBody}</p>
            </div>
            );
}

export default Note;

// return(
//     <div name={props.id} className="note">
//         <Link to={`/note/${props._id}/edit`}>Edit</Link>
//         <br />
//         <Link onClick={(event,prop=props._id) => props.delete(event,prop)} to="#">Delete</Link>
//         <br />
//         <br />
//         <p>{props.title}</p>
//         <p>{props.textBody}</p>
//     </div>
//     );