import React from "react";
import { Link } from "react-router-dom";

const Thumbnail = props => {
    return(
        <Link to={`/note/${props.note.id}`} className="thumbnail">
            <h3>{props.note.title}</h3>
            <p>{props.note.textBody}</p>
        </Link>
    );
}

export default Thumbnail;