import React from "react";
import axios from "axios";

class NoteDetail extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "",
      tags: [],
      tag: '',
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
        `https://stark-refuge-65834.herokuapp.com/api/posts/${this.props.match.params.id}`
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

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmitTag = e => {
    e.preventDefault();
    this.setState({
      tags: [...this.state.tags, this.state.tag],
      tag: ''
    })
  }

  deletePostTag = tag => {
    this.setState({
      tags: this.state.tags.filter(ele => {
        return ele !== tag;
      })
    })
  }

  handleUpdate = e => {
    e.preventDefault();
    const newNote = {
      tags: this.state.tags,
      title: this.state.title,
      contents: this.state.contents
    };
    this.putNote(newNote);
    this.setState({ editing: false });
  };

  handleDelete = () => {
    this.deleteNote(this.state.id);
    this.props.history.push("/");
  };

  putNote = note => {
    axios
      .put(`https://stark-refuge-65834.herokuapp.com/api/posts/${note.id}`, {
        ...note
      })
      .then(response => {
        this.props.fetchNotes();
      })
      .catch(err => console.log(err));
  };

  deleteNote = id => {
    axios
      .delete(`https://stark-refuge-65834.herokuapp.com/api/posts/${id}`)
      .then(response => {
        this.props.fetchNotes();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="note-detail">
        <header className="body-header">
          <div className="tags-container">
            <form className="tags-form" onClick={this.handleEditing.bind(this)}
              onSubmit={this.handleSubmitTag}>
              <div className="tags-list">
                <div className="tags">
                  {this.state.tags.map(tag => {
                    return <div className="tag" key={tag.id}>
                      <p key={tag}>{tag}</p>
                      <p className='x hide-x' onClick={this.deletePostTag.bind(this, tag)}>|  x</p>
                    </div>
                  })}
                </div>
              </div>
              <input
                className="input-tags"
                type="text"
                name="tag"
                value={this.state.tag}
                onChange={this.handleInput}
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
          onChange={this.handleInput.bind(this)}
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
          onChange={this.handleInput.bind(this)}
        />

      </div>
    );
  }
}

export default NoteDetail;