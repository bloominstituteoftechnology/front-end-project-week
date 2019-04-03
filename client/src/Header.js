import React from 'react';


export const Header = (props) =>{
    return(
        <div className="main-container-header single-note-header">
            <h2>{props.text}<span> {props.span}</span></h2>
        </div>
    )
}