import React from 'react';


const Note = props => {
    return (
        <div>
            TITLE:{props.noteEntry.title}
            <br />
            TEXT: {props.noteEntry.textBody}
        </div>
    );
}

export default Note; 