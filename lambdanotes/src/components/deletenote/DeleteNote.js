import React from "react";
import "./DeleteNote.css";

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
     var currentNotes = this.state.notes;
     currentNotes.splice(this.props.arrayIndex, 1)
     console.log(currentNotes);
     this.props.deleteNote(currentNotes);
   }
   render(){
     return(
       <div className="delete-note">
         <div className="delete-choices">
           <button className="side-button delete-button" onClick={this.deleteIt} >
             Delete
           </button>
           <button className="side-button" onClick={this.props.closePopup}>
             No
           </button>
         </div>
       </div>
     )
   }
}

export default DeleteNote;
