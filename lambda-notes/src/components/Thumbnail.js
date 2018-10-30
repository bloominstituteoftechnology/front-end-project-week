import React from "react";

const Thumbnail = props => {
    return(
        <div className="thumbnail">
            <h3>{props.note.title}</h3>
            <p>{props.note.textBody}</p>
        </div>
    );
}

export default Thumbnail;