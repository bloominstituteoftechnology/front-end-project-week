import React from 'react';


 const DisplayNote = props => {
 
 
//     function routeToItem(ev, item) {
//     ev.preventDefault();
//     props.history.push(`/item-list/${item.id}`);
//   }
  return (
    <div className="displayNoteCard">
     <h2> {props.note.title} </h2>
     <p> {props.note.textBody}</p>
     
     </div>
  
  );
}

export default DisplayNote;