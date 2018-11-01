import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

class NoteDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://fe-notes.herokuapp.com/note/get/${this.props.match.params._id}`
      )
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error));
  }
  clickHandler = event => {
    event.preventDefault();
    axios.delete(
      `https://fe-notes.herokuapp.com/note/delete/${
        this.props.match.params._id
      }`
    );
    alert("Note Deleted (Im not lying, it's gone, go check for yourself)");
  };

  render() {
    return (
      <div>
        <div>
          <NavLink to={`/edit-form/${this.state.notes._id}`}>Edit</NavLink>
          <button onClick={this.clickHandler}>Delete</button>
        </div>
        <h1>{this.state.notes.title}</h1>
        <p>{this.state.notes.textBody}</p>
      </div>
    );
  }
}

export default NoteDetails;
