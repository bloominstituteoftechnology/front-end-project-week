import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";

const Note = (props) => {
    return(
        <div className="note">
            <h3 className="note-title">
                {props.mapNote.title}
            </h3>

            <p className="note-body">
                {props.mapNote.textBody}
            </p>
        </div>
    )
};
export default Note;