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
      .get(`http://localhost:9000/notes/${this.props.match.params.id}`)
      .then(response => this.setState({ notes: response.data }))
      .catch(error => console.log(error));
  }
  clickHandler = event => {
    event.preventDefault();
    axios.delete(`http://localhost:9000/notes/${this.props.match.params.id}`);
    alert("Note Deleted (Im not lying, it's gone, go check for yourself)");
  };

  render() {
    return (
      <div>
        <div className="detailedNote">
          <h1>{this.state.notes.title}</h1>
          <p>{this.state.notes.content}</p>
        </div>
        <div className="buttonBar">
          <NavLink to={`/edit-form/${this.state.notes.id}`}>Edit</NavLink>
          <button onClick={this.clickHandler}>Delete</button>
        </div>
      </div>
    );
  }
}

export default NoteDetails;
