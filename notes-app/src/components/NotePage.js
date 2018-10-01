import React from 'react';

function NotePage(props) {
    console.log(props.notes)
    console.log(props.notes[0])
    const note = (props.notes.find(note => note._id === parseInt(props.match.params.id)));
    return (
        <div className="notepage-div">
            {/* <h2> {note.title} </h2> */}
            {/* <p> {note.textBody} </p> */}
            <p>testing</p>
        </div>
    )
}

export default NotePage;