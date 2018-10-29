import React from 'react';
import DisplayNoteCard from './DisplayNoteCard';

 const DisplayNoteList = props => {
 
 
//     function routeToItem(ev, item) {
//     ev.preventDefault();
//     props.history.push(`/item-list/${item.id}`);
//   }
  return (
    <div className = "NoteListContainer">
      <h3> Your Notes : </h3>
    <div className="noteList">
     
      {props.notes.map( note => ( <DisplayNoteCard key={note._id} note={note} /> ))}
  </div>
  </div>
  );
}

export default DisplayNoteList;