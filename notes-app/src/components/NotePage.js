import React from 'react';

function NotePage(props) {
    console.log(props.notes)
    const foundNote = (props.notes.find(note => note._id === props.match.params.id));
    console.log(foundNote)
    // console.log(foundNote.textBody)
    // console.log(foundNote.title)
    return (
        <div className="notepage-div">
            {/* <h2> {foundNote.title} </h2> */}
            {/* <p> {note.textBody} </p> */}
            <p>testing</p>
        </div>
    )
}

export default NotePage;