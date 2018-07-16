import React from 'react';

const Note = props => {
    console.log(props.match);
    return(
        <div>{props.match.params.id}</div>
    );
}

export default Note;