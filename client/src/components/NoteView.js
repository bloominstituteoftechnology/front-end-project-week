import React, { Component } from "react";
import axios from "axios";

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      eid: "",
      etitle: "",
      etextBody: "",
      modal: false
    };
    // this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const id = this.props.match.params.id;
    console.log(id);
    this.fetch(id);
  }

  fetch = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(res => {
        console.log("noteview", res);
        this.setState(() => ({
          id: res.data._id,
          title: res.data.title,
          textBody: res.data.textBody
        }));
      })
      .catch(err => {
        console.dir(err);
      });
  };

  toggleEdit = e => {
    e.preventDefault();
    this.setState({ editing: true });
  };

  editSubmitHandler = e => {
    e.preventDefault();
    this.props.editNote({
      id: this.state.id,
      title: this.state.title,
      textBody: this.state.textBody
    });
    this.setState({
      editing: false
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  // deleteNote = id => {
  //   axios
  //     .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
  //     .then(res => {
  //       console.log("deleted", res);
  //     })
  //     .catch(err => console.dir(err));
  // };

  // toggle() {
  //   this.setState({
  //     modal: !this.state.modal
  //   });
  // }

  // deleteHandler = event => {
  //   event.preventDefault();
  //   this.deleteNote(this.state.note._id);
  //   this.props.history.push("/");
  // };

  render() {
    if (this.state.editing) {
      return (
        <div className="edit-form">
          <h1>Edit Note:</h1>
          <form onSubmit={this.editSubmitHandler}>
            <input
              name="title"
              type="text"
              placeholder="new title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <input
              name="textBody"
              type="text"
              placeholder="new note"
              value={this.state.textBody}
              onChange={this.handleChange}
            />
            <button type="submit">Update</button>
          </form>
        </div>
      );
    }

    return (
      <div className="note-view">
        <div className="note-header">
          <div className="note-buttons">
            <button className="edit-button" onClick={this.toggleEdit}>
              edit
            </button>

            <button className="delete-button">delete</button>
          </div>
          <div className="note-title">{this.state.title}</div>
        </div>
        <div className="note-body">
          <p>{this.state.textBody}</p>
        </div>
      </div>
    );
  }
}

export default NoteView;
