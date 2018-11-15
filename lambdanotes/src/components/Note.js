import React from 'react';

export default (props) => {
    return(
        <div>
            <h1>Note Name: {props.title}</h1>
            <p>Note: {props.note}</p>
        </div>
    )
}