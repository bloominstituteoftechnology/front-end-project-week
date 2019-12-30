import React from 'react';
import {NavLink} from 'react-router-dom';
import { Button } from 'reactstrap';

export default class HomePage extends React.Component {
constructor(props){
  super(props);
}










render(){

  return (





<div className='Notes'>
 {this.props.notes.notes.map(note => {
   return(

   <div key ={note.id} className='NoteContainer'>
      <NavLink to ={`/notes/${note.id}`}>
   <h3>{note.title}</h3>
   <hr/>
   <p> {note.content}</p>
    </NavLink>
   </div>

   )
 })}
</div>


)
}


}
