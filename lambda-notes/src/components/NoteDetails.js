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

  onDelete = () => {
    let noteId = this.state.details._id;

    axios
      .delete(`https://killer-notes.herokuapp.com/note/delete/${noteId}`)
      .then(response => {
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h1>Note Details</h1>
        <h1>{this.state.details.title}</h1>
        <p>{this.state.details.textBody}</p>
        <div>
          <button>
            <Link to="/">EDIT</Link>
          </button>
          <button onClick={this.onDelete}> DELETE</button>
        </div>
      </div>
    );
  }
}

export default NoteDetails;
