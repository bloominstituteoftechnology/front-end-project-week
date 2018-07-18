import React, { Component } from 'react';
import "./NewNote.css"

class NewNote extends Component {
constructor(){
  super();
  this.state = {
    title: "",
    body: "",
    id: "",
    notes: "not notes"
  }
}
formSubmit = event => {
  console.log("hi")
  this.props.addNote();
}

  render() {
    return (
      <div>
        <h2>
          Create New Note:
        </h2>
        <form className="newnote-container">
          <input type="text" placeholder="Note Title" className="title-input"></input>
          <textarea rows="20" cols="50" className="body-input" placeholder="Note Content"></textarea>
          <div className="save-button" onClick={this.formSubmit}>Save</div>
        </form>
      </div>
    );
  }

}

export default NewNote;
