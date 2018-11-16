import React from "react";
import axios from "axios";

class NoteDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      _id: "",
      tags: [],
      tag: "",
      title: "",
      textBody: "",
      editing: false
    };
  }

  componentDidMount() {
    axios
      .get(
        `https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`
      )
      .then(response => {
        this.setState({
          _id: response.data._id,
          title: response.data.title,
          textBody: response.data.textBody,
          tags: response.data.tags
        });
      })
      .catch(err => console.log(err.response));
  }

  handleEditing = () => {
    this.setState({
      editing: true
    });
  };

  handleEditingChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  putNote = note => {
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${note._id}`, {
        ...note
      })
      .then(response => {
        console.log(response);
        this.props.fetchNotes();
      })
      .catch(err => console.log(err));
  };

  handleUpdate = e => {
    e.preventDefault();
    this.putNote(this.state);
    this.setState({ editing: false });
  };

  deleteNote = id => {
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        console.log(response);
        this.props.fetchNotes();
      })
      .catch(err => console.log(err));
  };
  handleDelete = () => {
    this.deleteNote(this.state._id);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="note-detail">
        <header className="body-header">
          <form className="tags-form" onSubmit={this.props.handleSubmitTag}>
            <div className="tags">
              {this.props.tags.map(tag => {
                return <p className="tag">{tag}</p>
              })}
            </div>
            <input
              className="input-tags"
              type="text"
              name="tag"
              value={this.props.tag}
              onChange={this.props.handleInput}
              onSubmit={this.props.handleSubmitTag}
              placeholder="add tags"
            />
          </form>
          <div className="btn-container">
            <button
              className={this.state.editing ? "save-btn" : "hide"}
              onClick={this.handleUpdate}
            >
              save
          </button>
            <button className="delete-btn" onClick={this.handleDelete}>
              delete
          </button>
          </div>
        </header>
        <hr></hr>
        <h3
          onClick={this.handleEditing.bind(this)}
          className={this.state.editing ? "none" : "note-title"}
        >
          {this.state.title}
        </h3>
        <input
          className={this.state.editing ? "input-title" : "none"}
          type="text"
          value={this.state.title}
          name="title"
          onChange={this.handleEditingChange.bind(this)}
        />
        <p
          className={this.state.editing ? "none" : "note-body"}
          onClick={this.handleEditing.bind(this)}
        >
          {this.state.textBody}
        </p>
        <textarea
          className={this.state.editing ? "input-body" : "none"}
          type="textarea"
          value={this.state.textBody}
          name="textBody"
          onChange={this.handleEditingChange.bind(this)}
        />

      </div>
    );
  }
}

export default NoteDetail;
