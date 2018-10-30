import React from 'react';
import { NavLink } from 'react-router-dom';

 const DisplayNote = props => {
 
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


  return (
   
    <div className="displayNote">
     <nav>
         <NavLink to={`/Notes/edit/${note._id}`}> Edit  </NavLink>
        <NavLink to={`/Notes/${note._id}/delete`}> Delete </NavLink>
     
    
        </nav>  
      <h3> {note.title}  </h3>
      <p> {note.textBody} </p>
    </div>
  
  );
}

export default DisplayNote;