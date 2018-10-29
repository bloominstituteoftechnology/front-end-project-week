import React from 'react';


 const DisplayNote = props => {
 
 let note = '';


  if (props.match.params.id) {
    note = props.notes.filter(
      item => item._id === props.match.params.id
    );
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
      <h3> {note[0].title}  </h3>

    </div>
  
  );
}

export default DisplayNote;