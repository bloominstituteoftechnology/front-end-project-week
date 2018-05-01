import React from 'react';

export default props => {
  return(
    <li className="note">
      <p>{props.note.title}</p>
      <hr/>
      <p>{props.note.content}</p>
    </li>
  );
}