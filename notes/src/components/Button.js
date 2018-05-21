import React from 'react';

export default (props) => {
    return (
        <button id={props.id} className={props.class} onClick={props.function}>{props.text}</button>
    );
}


// Default Button component that will take in as much props as we are giving to it & is infintely reusable
