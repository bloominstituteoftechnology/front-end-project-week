import React from 'react';


export const Header = (props) =>{
    return(
        <div className="main-container-header single-note-header">
            <h2>{props.text}</h2>
        </div>
    )
}