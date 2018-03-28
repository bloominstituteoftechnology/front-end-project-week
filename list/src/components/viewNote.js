import React from 'react';


export const ViewNote = props => {
    // display a maximized version of the title and content of note clicked
    console.log(props);

    return(
    <div>
        <div className="updateButtons">
            <button> Edit Note </button>
            <button> Delete Note </button>
        </div>
         <h1> {props.notes.title} </h1>
         <div>{props.notes.content}</div>
    </div>
    )
}
