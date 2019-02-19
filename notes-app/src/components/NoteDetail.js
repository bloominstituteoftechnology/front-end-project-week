import React from "react";
import axios from "axios";

class NoteDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      tags: [],
      title: "",
      contents: "",
      created_at: "",
      updated_at: "",
      editing: false
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://localhost:4000/api/posts/${this.props.match.params.id}`
      )
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          contents: response.data.contents,
          tags: response.data.tags,
          created_at: response.data.created_at,
          updated_at: response.data.updated_at
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
      .put(`http://localhost:4000/api/posts/${note.id}`, {
        ...note
      })
      .then(response => {
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
      .delete(`http://localhost:4000/api/posts/${id}`)
      .then(response => {
        this.props.fetchNotes();
      })
      .catch(err => console.log(err));
  };
  handleDelete = () => {
    this.deleteNote(this.state.id);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="note-detail">
        <header className="body-header">
          <div className="tags-container">
            <form className="tags-form" onSubmit={this.props.handleSubmitTag}>
              <div className="tags">
                {this.state.tags.map(tag => {
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
          </div>
          <div className="timeStamp">
            <p>Created: {this.state.created_at}</p>
            <p>Updated: {this.state.updated_at}</p>
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
          {this.state.contents}
        </p>
        <textarea
          className={this.state.editing ? "input-body" : "none"}
          type="textarea"
          value={this.state.contents}
          name="contents"
          onChange={this.handleEditingChange.bind(this)}
        />

      </div>
    );
  }
}

export default NoteDetail;