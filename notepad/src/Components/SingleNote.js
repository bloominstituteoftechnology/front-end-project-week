import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class SingleNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: null,
      title: "",
      textBody: ""
    };
  }

  componentDidMount() {
    const url = "https://killer-notes.herokuapp.com";
    axios
      .get(`${url}/note/get/${this.props.match.params.id}`)
      .then(response => {
        console.log("response:", response.data);
        this.setState({ note: response.data });
      })
      .catch(error => console.log("Error: ", error));
  }

  render() {
    // const note = this.state.note.find(note => {
    //   // console.log("note id: ", note.id)
    //   // console.log("params id: ", this.props.match.params.id)
    //   if (note.id === this.props.match.params.id) {
    //     // const note = note;
    //     // console.log(note)
    //     return note;
    //   }
    //   return note;
    // });
    // console.log("params ", this.props.match.params.id)
    // console.log("note.id", this.state.note.id)
    //== vs === know the difference
    // console.log("note ", this.props.note.id)
    if (!this.state.note) {
      return <div>Hold your horses!</div>;
    }
    return (
      <React.Fragment>
        <div className="e_d-buttons">
          <Link to={`/notes/edit/${this.state.note._id}`} className="edit-link">
            <div className="edit-button">Edit</div>
          </Link>
          <Link
            to={`/notes/${this.state.note._id}/delete`}
            className="delete-link"
          >
            <div className="s_delete-button">Delete</div>
          </Link>
        </div>
        <div className="note-container">
          <div className="notecard-title">{this.state.note.title}</div>
          <div className="notecard-content">{this.state.note.textBody}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default SingleNote;
