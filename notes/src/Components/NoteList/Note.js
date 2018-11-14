import React from 'react';

/*
 * Takes in props:
 * id: ""
 * title: ""
 * textBody: ""
 */

 const Note = (props) => {
   let propText = props.textBody;
   const text = propText.length > 125 ?
      propText.substring( 0, 120 ) + "..." :
      propText;
      

   return (
    <div className="note">
      <h3 className="noteTitle">{props.title}</h3>
      <div className="noteText">{text}</div>
    </div>
   );
 };

 export default Note;