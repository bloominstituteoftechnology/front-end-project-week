import React from 'react';
import DisplayNote from './DisplayNote';

 const DisplayNoteList = props => {
 
 
//     function routeToItem(ev, item) {
//     ev.preventDefault();
//     props.history.push(`/item-list/${item.id}`);
//   }
  return (
    <div className="noteList">
     
      {props.notes.map( note => ( <DisplayNote note={note} /> ))}
  </div>
  );
}

export default DisplayNoteList;