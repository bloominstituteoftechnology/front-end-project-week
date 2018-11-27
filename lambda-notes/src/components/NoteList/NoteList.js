import React from 'react'

const NoteList = props => {
 return (
  <div>
   <h1>{props.title}</h1>
   <article>
    {props.textBody}
   </article>
  </div>
 );
}

export default NoteList;
