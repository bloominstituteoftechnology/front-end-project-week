import React from 'react';

const Note = props => {
    return (
        <div>
            <div>
                <button>edit</button>
                <br />
                <button>delete</button>
            </div>
            <div>
                TITLE:{props.noteEntries[1].title}
                <br />
                TEXT: {props.noteEntries[1].textBody}
            </div>
        </div>
    )
}

export default Note