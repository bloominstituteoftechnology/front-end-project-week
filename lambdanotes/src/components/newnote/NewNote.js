import React, { Component } from 'react';
import "./NewNote.css"

class NewNote extends Component {
constructor(){
  super();
  this.state = {
    title: "",
    body: "",
    id: ""
  }
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
          <input type="submit" value="Save" className="save-button"></input>
        </form>
      </div>
    );
  }

}

export default NewNote;
