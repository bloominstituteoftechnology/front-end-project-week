import React from 'react';
import { NavLink } from 'react-router-dom';

 const DeleteNote = props => {
 
 let note = '';


  if (props.match.params.id) {
    note = props.notes.filter(
      item => item._id === props.match.params.id
    );
   note = note[0];
   console.log(note);
  } else {
    alert("wrong note ID");
    props.history.push('/');
  }

  const handleDelete = () =>{
    
    props.submitdelete(note._id);
    props.history.push('/');
  }

  const handleCancel = () =>{
    props.history.push(`/Notes/${note._id}`);
  }

//     function routeToItem(ev, item) {
//     ev.preventDefault();
//     props.history.push(`/item-list/${item.id}`);
//   }


  return (
   
    <div className="deleteNote">
     <div className="deleteNoteWindow">
      <p>Are you sure you want to delete this?</p>
      <div className="deleteButton">
        <button className="delete" onClick={handleDelete}> Delete </button>
        <button onClick={handleCancel}> No </button>
     </div>
     </div>
    </div>
  
  );
}

export default DeleteNote;