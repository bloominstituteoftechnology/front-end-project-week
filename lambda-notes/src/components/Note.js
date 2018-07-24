import React from 'react';

const Note = ({ title, textBody }) => {
  return ( 
    <div>
      <h3>{title}</h3>
      <p>{textBody}</p>
    </div>
   );
}
 
export default Note;