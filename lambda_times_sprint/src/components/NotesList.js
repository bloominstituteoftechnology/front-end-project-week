import React from 'react';

function NotesList(props) {
    if (!props.notesList || !props.notesList.length) {
        return <h1>No notes found. Fetching data...</h1>
    }
    return (
        <div className="notes-list-wrapper">
          <h2>Your Notes:</h2>
            {props.notesList.map(tag => (
            <div className="note-card" key={tag.id}>
                
                <h3
                onClick={() => props.history.push(`/tags/${tag.id}/info`)}
                >
                {tag.title}
                </h3>
                <p>({tag.textBody})</p>
            </div>
            ))}
        </div>
    );
}

export default NotesList;