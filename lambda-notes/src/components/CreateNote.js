import React, { Component } from 'react';
import './CreateNote.css'

class CreateNote extends Component {
  constructor (props) {
    super(props);
    this.state = {
      noteID: new Date(),
      noteTitle: '',
      noteText: ''
  }
}

handleNoteInput = e => {
    this.setState({[e.target.name]: e.target.value});
};

handleSaveNoteButton = () => {
    const newNote = this.state;
    this.props.notes.push(newNote);
    this.setState({
        noteID: new Date(),
        noteTitle: '',
        noteText: ''
    });
}


  render() {

    return  (
     
        <form className="createNoteWrapper">
         <row>
            <div className="form-group">
                <h4 className="mt-5 mb-5"><strong>Create New Note:</strong></h4>
                <input className="titleAreaInput col-md-9" onChange={this.handleNoteInput} type="text" name="noteTitle" id={this.state.noteID} placeholder="Note Title" value={this.state.noteTitle} />
            </div>
        
            <div className="mr-4 mt-3">
                <textarea className="textAreaInput col-md-12 mb-3" onChange={this.handleNoteInput} type="textarea" name="noteText" id={this.state.noteID} placeholder="Note Content" value={this.state.noteText}></textarea>
            </div>
            <div>
                <button type="button" className="ml-0 btn btn-md" onClick={this.handleSaveNoteButton}>Save</button>
            </div>
         </row>
       </form>
  
      );
  }
}

export default CreateNote;

