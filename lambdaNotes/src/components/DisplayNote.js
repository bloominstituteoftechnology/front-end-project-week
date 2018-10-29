import React from 'react';


 const DisplayNote = props => {
 
 let note = '';


  if (props.match.params.id) {
    note = props.notes.filter(
      item => item._id === props.match.params.id
    );
    {console.log(note)}
  } else {
    alert("wrong note ID");
    props.history.push('/');
  }


//     function routeToItem(ev, item) {
//     ev.preventDefault();
//     props.history.push(`/item-list/${item.id}`);
//   }

console.log(note)
  return (
   
    <div className="displayNote">
  
      <h3> {note[0].title}  </h3>
      <p> {note[0].textBody} </p>
    </div>
  
  );
}

export default DisplayNote;