import React from 'react';
import axios from "axios";
import DeleteModal from "./DeleteModal";

import {Route} from "react-router-dom";

class Note extends React.Component {
constructor(props){
    super(props);
    this.state={
        activeNote:{
            title:'',
            textBody:''
        },
        isEditing: false,
        showDeleteModal:false
    }
}
    
componentDidMount() {
    axios.get(`https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
    .then(response => 
        this.setState({ 
      activeNote: {title: response.data.title, textBody:response.data.textBody, tags:[...response.data.tags]}
    })
    )
    .catch(error=>{console.log("The server failed to retrieve this note: ", error)})
}

toggleEditing = event => {
event.preventDefault();
this.setState({...this.state, isEditing:!this.state.isEditing})
}

toggleModal = event => {
    event.preventDefault();
    this.setState({...this.state, showDeleteModal:!this.state.showDeleteModal});
}

editChangeHandler=(key, value) => {
    this.setState({
        ...this.state,
        activeNote:{
        ...this.state.activeNote,
          [key]: value
        }
      })
  }

  editNote= event => {
      event.preventDefault();
      let note=this.state.activeNote;
      if (note.title!=="" && note.textBody!=='') {
      axios.put(`http://fe-notes.herokuapp.com/note/edit/${this.props.match.params.id}`, this.state.activeNote)
      .then(response=>{this.setState({...this.state, activeNote: response.data})})
      .catch(error=>{console.log("We were unable to edit this note: ", error)})
      this.toggleEditing(event);
      } else {
          alert("All notes must have a title and text. Please fill out both fields before submitting any changes")
      }
  }

render(){

    if (!this.state.isEditing) {
 return(
 <div className="note-full-view">
 <div className="edit-delete-wrapper">
 <p className="edit-button" onClick={this.toggleEditing}>edit</p>
 <p className="delete-button" onClick={this.toggleModal}>delete</p>
 </div>
    <h3 className="full-note-title">{this.state.activeNote.title}</h3>
<h4 className="full-note-text">{this.state.activeNote.textBody}</h4>
<Route render={ownProps=>(<DeleteModal {...ownProps} show={this.state.showDeleteModal} toggleModal={this.toggleModal} deleteNote={this.props.deleteNote}/>
    )}/>
    
    </div>
 )
} else {
return (
    <div className="edit-note-wrapper">
    <h2>Edit Note:</h2>
    <form className="edit-note-form" onSubmit={this.editNote}>
        <input className="edit-note-title" type="text" placeholder="Note Title" name="title" value={this.state.activeNote.title} onChange={event=>this.editChangeHandler(event.target.name, event.target.value)}></input>
        <input className="edit-note-text" type="text" placeholder="Note Content" name="textBody" value={this.state.activeNote.textBody} onChange={event=>this.editChangeHandler(event.target.name, event.target.value)}></input>

    <button type="submit">Update</button>
    </form>
                </div>
)
}
}
}

export default Note;