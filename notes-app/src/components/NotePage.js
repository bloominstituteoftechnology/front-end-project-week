import React, { Fragment } from 'react';


function NotePage(props) {
    const singleNote = (props.notes.find(friend => friend.id === parseInt(props.match.params.id)))

    return (
        <div className="notepage-div">
            <h2> {singleNote.title} </h2>
            <p> {singleNote.textBody} </p>
        </div>
    )
}

export default NotePage;