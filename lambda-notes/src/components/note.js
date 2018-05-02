import React from 'react';


const note = (props) => {
    <div className = "note">
        <h2> props.title </h2>
        <p>props.content</p>
    </div>
}

export default note;