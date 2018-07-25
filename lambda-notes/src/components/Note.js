import React from 'react';

const Note = (props) => {
  console.log('log 3', props)
  return ( 
    <div>
      <h4>{props.title}</h4>
      <p>{props.textBody}</p>
    </div>
   );
};
 
export default Note;