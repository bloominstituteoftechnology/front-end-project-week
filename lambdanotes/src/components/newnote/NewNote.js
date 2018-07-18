import React, { Component } from 'react';
import "./NewNote.css"

class NewNote extends Component {
constructor(){
  super();
  this.state = {
    title: "",
    body: "",
    id: "",
  }
  this.onFormChange = this.onFormChange.bind(this);
}
onFormChange = event => {
this.setState({[event.target.name]: event.target.value})
}
onSaveClick = () => {
  this.props.addNote(this.state);
}

  render() {
    return (
      <div>
        <h2>
          Create New Note:
        </h2>
        <form className="newnote-container">
          <input type="text" placeholder="Note Title" className="title-input" name="title" onChange={this.onFormChange}></input>
          <textarea rows="20" cols="50" className="body-input" placeholder="Note Content" name="body" onChange={this.onFormChange}></textarea>
          <div className="save-button" onClick={this.onSaveClick}>Save</div>
        </form>
      </div>
    );
  }

}

export default NewNote;
