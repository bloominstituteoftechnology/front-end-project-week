import React from "react";
// import {Link, Route} from "react-router-dom";
import "../App.css";

// import DeleteModal from "./DeleteModal";

class NoteView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDeleting: false,
      isEditing: false,
      tags: [],
      title: "",
      textBody: ""
    };

    this.note = this.props.notes.find(
      note => `${note._id}` === this.props.match.params.id
    );
  }

  toggleDelete = () => {
    this.setState({isDeleting: !this.state.isDeleting});
  };

  toggleEdit = () => {
    this.setState({isEditing: !this.state.isEditing});
  };

  updateHandler = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = id => {
    console.log(id);
    const {tags, title, textBody} = this.state;
    const updatedNote = {tags, title, textBody};
    this.props.update(id, updatedNote);
    this.setState({tags: [], title: "", textBody: ""});
    this.props.history.push("/notes");
  };

  render() {
    return (
      <div className="note-view">
        {!this.state.isEditing ? (
          <div>
            <div className="edit-delete">
              <span onClick={this.toggleEdit}>edit</span>
              <span onClick={this.toggleDelete}>delete</span>
            </div>

            <button onClick={() => this.props.delete(this.note._id)}>
              Delete Test
            </button>
            <h2>{this.note.title}</h2>
            <p>{this.note.textBody}</p>
          </div>
        ) : (
          <div className="new-note">
            <h2>Edit Note:</h2>
            <form onSubmit={() => this.handleSubmit(this.note._id)}>
              <input
                required
                type="text"
                name="title"
                placeholder={this.note.title}
                value={this.state.title}
                onChange={this.updateHandler}
              />
              <br />
              <textarea
                required
                cols="30"
                rows="10"
                name="textBody"
                placeholder={this.note.textBody}
                value={this.state.textBody}
                onChange={this.updateHandler}
              />
              <br />
              <button>Save</button>
              <button onClick={this.toggleEdit}>Cancel</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default NoteView;
