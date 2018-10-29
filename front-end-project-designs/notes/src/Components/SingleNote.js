import React from 'react';
import './Style.css';



const SingleNote = (props) => {
    console.log("Single-note-props : ", props);
    return (
        <div className = "note-card">
            <h4> {props.data.title} </h4>
            <p className =  "line"></p>
            <p> {props.data.textBody} </p>
        </div>
    )
}


export default SingleNote;