import React from "react";
import "./DeleteNote.css";
import { Link } from 'react-router-dom';
import axios from 'axios';

 class DeleteNote extends React.Component {
   constructor(props){
     super(props);
     this.state = {
       notes: "Hi"
     }
     this.deleteIt = this.deleteIt.bind(this);
   }
   componentWillMount(){
     this.setState({notes: this.props.notes})
   }
   deleteIt(){
     axios.delete(`http://localhost:8000/api/notes/${this.state.notes[this.props.arrayIndex].id}`)
     .then(function (response) {
       console.log(response);
     })
     .catch(function (error) {
       console.log(error);
     });
     var modal = document.querySelector(".delete-note");
     modal.style.display = "none";
     var currentNotes = this.state.notes;
     currentNotes.splice(this.props.arrayIndex, 1)
     currentNotes.forEach(function(note){
       var start = 0;
       note.id = start;
       start++;
     })
     this.props.deleteNote(currentNotes);
   }
   render(){
     return(
       <div className="delete-note">
         <div className="delete-choices">
           <Link to={"/"} style={{ textDecoration: 'none' }}>
             <button className="side-button delete-button" onClick={this.deleteIt} >
               Delete
             </button>
           </Link>
           <button className="side-button" onClick={this.props.closePopup}>
             No
           </button>
         </div>
       </div>
     )
   }
}

export default DeleteNote;
