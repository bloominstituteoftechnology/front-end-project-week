import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {},
      editTitle: "",
      editBody: "",
      deleteModal: false,
      edit: true
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState({
          note: response.data,
          editBody: response.data.textBody,
          editTitle: response.data.title
        });
        console.log("NOTE RESPONSE", response);
      })
      .catch(error => console.log(error));
  }

  deleteRequest() {
    let id = this.props.match.params.id;
  }

  editRequest() {
    let note = {
      _id: this.state.note._id,
      title: this.state.editTitle,
      textBody: this.state.editBody
    };
  }

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="singleNote">
        <Link
          className="singleNote__edit"
          to={`/note/edit/${this.state.note._id}`}
        >
          edit
        </Link>
        <span
          className="singleNote__delete"
          onClick={() => this.props.deleteNote(this.state.note._id)}
        >
          delete
        </span>
        <h1>{this.state.editTitle}</h1>
        <p>{this.state.editBody}</p>
      </div>
    );
  }
}

export default Note;
