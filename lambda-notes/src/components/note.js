import React from 'react';


const Note = (props) => {
    return (
    <div className = "note">
        <h2> props.title </h2>
        <p>props.content</p>
    </div>
    )
}
export default Note;