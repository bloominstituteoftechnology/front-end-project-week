import React from 'react';



export default ({title, textBody, onDelete}) => (
  <div>
    <span>{title}</span>
    <span>{textBody}</span>
    <button onClick={onDelete}>Delete</button>
  </div>
);

