import React from 'react';
import { NavLink } from 'react-router-dom';

 const DisplayNote = props => {
 console.log("DisplayNote Props : ", props.match.params.id);
 
 let note = '';
let noteId = '';

  if (props.match.params.id) {
    note = props.notes.filter(
      item => item._id === props.match.params.id
    );
    note = note[0];
  //  noteId = note._id;
  //  console.log(note);
  //  console.log("noteId = ", noteId);
  } else {
    alert("wrong note ID");
    props.history.push('/');
  }


//     function routeToItem(ev, item) {
//     ev.preventDefault();
//     props.history.push(`/item-list/${item.id}`);
//   }

console.log(note);
  return (
   
    <div className="displayNote">
     <nav>
         <NavLink to={`/Notes/edit/${props.match.params.id}`}> Edit  </NavLink>
        <NavLink to={`/Notes/${props.match.params.id}/delete`}> Delete </NavLink>
     
    
        </nav>  
      <h3> {note.title}  </h3>
      <p> {note.textBody} </p>
    </div>
  
  );
}

export default DisplayNote;