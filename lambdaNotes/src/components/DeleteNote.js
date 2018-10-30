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


//     function routeToItem(ev, item) {
//     ev.preventDefault();
//     props.history.push(`/item-list/${item.id}`);
//   }


  return (
   
    <div className="deleteNote">
    
     <button> Delete </button>
     <button > No </button>
    </div>
  
  );
}

export default DeleteNote;