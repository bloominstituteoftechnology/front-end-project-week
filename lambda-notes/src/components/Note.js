import React from 'react';

const Note = props => {


    return ( 
        <div>
            <p>{props.title}</p>
            <p>{props.content}</p>
        </div>
     );
}



export default Note
