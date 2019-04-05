import React from 'react';


export const Header = (props) =>{
    return(
        <div className="main-container-header single-note-header login-header-h2 register-header-h2">
            <h2>{props.text}<span> {props.span}</span></h2>
        </div>
    )
}