import React from 'react';

const Note = (props)=> {
  return (
    <div>
        <h3>{props.title}</h3>
        <h5>{props.textBody}</h5>
    </div> 
  ); 
}

export default Note;