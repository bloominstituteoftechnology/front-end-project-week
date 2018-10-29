import React from 'react';
import { Link } from 'react-router-dom';

 const DisplayNoteCard = props => {
 
 
//     function routeToItem(ev, item) {
//     ev.preventDefault();
//     props.history.push(`/item-list/${item.id}`);
//   }
  return (
    <div className="displayNoteCard">
  
     <Link to={`/Notes/${props.note._id}`} style={{ textDecoration: 'none'} }>
      <h3> {props.note.title} </h3>
      <p> {props.note.textBody}</p>
     </Link>
     </div>
  
  );
}

export default DisplayNoteCard;