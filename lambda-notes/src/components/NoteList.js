import React from "react";

import Thumbnail from "./Thumbnail";

const NoteList = props => {
    if (!props.noteList || !props.noteList.length) {
        return <h2>(Loading)</h2>
    } else {
        return (
            <div className="main-content">
                <h2>Your Notes:</h2>
                {props.noteList.map(note => {
                    return <Thumbnail note={note} key={note.id} />;
                })}
            </div>
        );
    }
}

export default NoteList;