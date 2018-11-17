import React, { Component } from "react";
import axios from "axios";

class DeleteModal extends Component {
  constructor(props) {
    super(props);
   
  
    console.log("test", props.match.params.id);
  }

  deleteNote = event => {
    event.preventDefault();
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${this.props.match.params.id}`)
      .then( response => {
        console.log("Success!")
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  };
  render() {
    console.log("test", this.state);
    return (
      <div className="container">
        <div className="delete-question">
          <h3> Are you sure you want to delete this? </h3>
        </div>
        <div className="delete">
          <button onClick={this.deleteNote}>Delete</button>
        </div>
        <div className="do-not-delete">
          {" "}
          <button>No</button>
        </div>
      </div>
    );
  }
}

export default DeleteModal;
