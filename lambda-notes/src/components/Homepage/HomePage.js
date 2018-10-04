import React from 'react';
import {NavLink} from 'react-router-dom';
import { Button } from 'reactstrap';

export default class HomePage extends React.Component {
constructor(props){
  super(props)
}


state ={
 SearchTitle:'',

}




handleInputChange = event => {
  this.setState({ [event.target.name]: event.target.value });
};


render(){

  return (

  <div >
    <div className='SearchBar'>
  <label>Search By Title</label>
  <input name='SearchTitle' onChange={this.handleInputChange}  value={this.state.SearchTitle} placeholder= 'Search'/>
  <Button onClick = {this.props.filterNotes(this.state.SearchTitle)}>Search</Button>
   </div>


    <hr/>

<div className='Notes'>
 {this.props.notes.notes.map(note => {
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
</div>

)
}


}
