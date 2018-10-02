import React from 'react';
import { Route } from 'react-router-dom';
import {NavLink} from 'react-router-dom';


function HomePage (props) {


  console.log(props);




    return (

    <div>
      <h2>Your Notes:</h2>
      <hr/>
   {props.notes.notes.map(note => {
     return(

     <div key ={note._id} className='NoteContainer'>
        <NavLink to ={`/notes/${note._id}`}>
     <h3>{note.title}</h3>
     <hr/>
     <p> {note.textBody}</p>
      </NavLink>
     </div>

     )
   })}

    </div>
  )

}

export default HomePage;
