import React, { Component } from "react";
import axios from "axios";
import CreateNote from "./CreateNote";
import { Redirect } from "react-router-dom";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: null,
      title: "",
      textBody: "",
      edit: false,
      deleted: false
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://localhost:4444/notes/${id}`)
      .then(res => {
        console.log(res.data);
        this.setState({
          note: res.data,
          title: res.data.title,
          textBody: res.data.textBody
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  editNote = () => {
    this.setState({ edit: true });
  };

  deleteNote = () => {
    axios
      .delete(`http://localhost:4444/notes/${this.state.note.id}`)
      .then(res => {
        console.log(res.data);
        this.setState({ deleted: true });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return this.state.deleted ? (
      <Redirect to="/notes" />
    ) : this.state.edit ? (
      <CreateNote
        edit={true}
        note={this.state.note}
        title={this.state.title}
        textBody={this.state.textBody}
      />
    ) : (
      <div className="note">
        <div className="editdeletebuttons">
          <a onClick={this.editNote}>edit</a>
          <a onClick={this.deleteNote}>delete</a>
        </div>
        <h3 className="">{this.state.title}</h3>
        <div>
          <div className="">{this.state.textBody}</div>
        </div>
      </div>
    );
  }
}

export default Note;
