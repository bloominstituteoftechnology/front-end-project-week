import React from 'react';

const Note = props => {
    return ( 
        <div>
            <span>{props.title}</span>
            <span>{props.content}</span>
        </div>
     );
}
 
export default Note;