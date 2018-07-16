import React from 'react';

const Note = props => {


    return ( 
        <div>
            <h3>{props.name}</h3>
            <p>{props.content}</p>
        </div>
     );
}



export default Note
