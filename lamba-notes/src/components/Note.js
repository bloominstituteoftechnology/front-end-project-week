import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
      <div>
        {!this.state.edit ? <h1>{this.state.note.title}</h1> : null}
        {!this.state.edit ? <p>{this.state.note.textBody}</p> : null}

        {this.state.edit ? (
          <input name="editTitle" value={this.state.editTitle} />
        ) : null}
        {this.state.edit ? (
          <input name="editBody" value={this.state.note.editBody} />
        ) : null}
      </div>
    );
  }
}

export default Note;
