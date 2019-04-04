import React from 'react';


export const Header = (props) =>{
    return(
        <div className="main-container-header single-note-header login-header-h2 register-header-h2">
            <h2>{props.text}<span> {props.span}</span>
                <span>
                    <div>
                        {localStorage.getItem('jwt') && (
                            <button onClick={props.destroyToken}>Signout</button>
                        )}
                    </div>
                </span>
            </h2>
        </div>
    )
}