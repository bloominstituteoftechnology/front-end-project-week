import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


const NoteCard = props => {
    return (
        <div>
            <Link to={"/note"}>
                <div style={{ border: "1px solid green", margin: "10px" }}>
                    TITLE:{props.noteEntry.title}
                    <br />
                    TEXT: {props.noteEntry.textBody}
                </div>
            </Link>
        </div>
    );
}

export default NoteCard; 