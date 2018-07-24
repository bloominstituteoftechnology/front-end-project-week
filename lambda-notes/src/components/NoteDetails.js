import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class NoteDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: ""
    };
  }

  componentWillMount() {
    this.getNote();
  }

  getNote() {
    let noteId = this.props.match.params.id;
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${noteId}`)
      .then(response => {
        this.setState({ details: response.data }, () => {
          console.log(this.state);
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Note Details</h1>
        <h1>{this.state.details.textBody}</h1>
      </div>
    );
  }
}

export default NoteDetails;
