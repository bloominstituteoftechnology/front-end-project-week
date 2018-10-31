import React from 'react';
import axios from "axios";

class Note extends React.Component {
constructor(props){
    super(props);
    this.state={
        activeNote:[],
        isEditing: false,
        updatedNote: {
            title:'',
            textBody:''
        }
    }
}
    
componentDidMount() {
    axios.get(`http://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
    .then(response => 
        this.setState({ 
      activeNote: response.data
    })
    )
    .catch(error=>{console.log("The server failed to retrieve this note: ", error)})
}

toggleEditing = event => {
event.preventDefault();
this.setState({...this.state, isEditing:!this.state.isEditing})
}

changeHandler=(key, value) => {
    this.setState({
        ...this.state,
        updatedNote:{
        ...this.state.updatedNote,
          [key]: value
        }
      })
  }
  
  editNote= event => {
      event.preventDefault();
      axios.put(`http://fe-notes.herokuapp.com/note/edit/${this.state.activeNote._id}`, this.state.updatedNote)
      .then(response=>{this.setState({...this.state, activeNote: response.data})})
      .catch(error=>{console.log("We were unable to edit this note: ", error)})
      this.toggleEditing(event);
  }

render(){

    if (!this.state.isEditing) {
 return(
 <div className="note-full-view">
 <div className="edit-delete-wrapper">
 <p className="edit-button" onClick={this.toggleEditing}>edit</p>
 <p className="delete-button">delete</p>
 </div>
    <h3 className="full-note-title">{this.state.activeNote.title}</h3>
<h4 className="full-note-text">{this.state.activeNote.textBody}</h4>
    </div>
 )
} else {
return (
    <div className="edit-note-wrapper">
    <h2>Edit Note:</h2>
    <form className="edit-note-form" onSubmit={this.editNote}>
        <input className="edit-note-title" type="text" placeholder="Note Title" name="title" value={this.state.updatedNote.title} onChange={event=>this.changeHandler(event.target.name, event.target.value)}></input>
        <input className="edit-note-text" type="text" placeholder="Note Content" name="textBody" value={this.state.updatedNote.textBody} onChange={event=>this.changeHandler(event.target.name, event.target.value)}></input>
    <button type="submit">Update</button>
    </form>
                </div>
)
}
}
}

export default Note;