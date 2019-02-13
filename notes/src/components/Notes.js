import React, { Component } from 'react';
import './Nodes.css';
import axios from 'axios';

class Notes extends Component {
  constructor(props){
  super(props);
  this.state ={
    notes:[],
    loading:true,
  }  
}
componentDidMount() {
  axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
     
      .then(response => {
        console.log(response)
          this.setState({notes:response.data,
          loading:false,
        })
      })
      .catch(err => console.log(err));

}
render() {
  return (
    <div className="contentContainer">
      <h2>Your Notes: </h2>
      <div className="notesContainer">
        {this.state.notes.map((note) => (
          <div className="note">
         
            <h3>{note.title}</h3>
            <p>{note.textBody}</p>   
          </div>  
        ))}           
      </div>
        
    </div>
  )
}
}
export default Notes; 