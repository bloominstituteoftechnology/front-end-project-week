import React from "react";
import axios from "axios";
import SideView from "./SideView";
import NotesForm from "./NotesForm";
import CreateNote from "./CreateNote";

class SelectedNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: "",
      toggleUpdate: true,
      toggleDelete: true,
      toggleLinks: true,
      editTitle: "",
      editContent: ""
    };
  }

  componentDidMount() {
    const noteId = this.props.match.params.id;
    this.getNote(noteId);
  }

  getNote = noteId => {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${noteId}`)
      .then(response => {
        this.setState(() => ({ note: response.data }));
      })
      .catch(error => {
        console.log(error);
      });
  };
  unDelete = () => {
    this.setState({ toggleDelete: !this.state.toggleDelete });
  };
  editButtons = () => {
    this.setState({
      toggleUpdate: !this.state.toggleUpdate,
      toggleLinks: !this.state.toggleLinks
    });
  };

  updateNote = id => {
    const updatedNote = {
      title: this.state.updateTitle,
      text: this.state.updateContent
    };
    axios
      .put(`https://killer-notes.herokuapp.com/note/edit/${id}`, updatedNote)
      .then(response => {
        this.setState({
          editTitle: "",
          editContent: ""
        });
        this.getNote(this.props.match.params.id);
        this.props.handleInfo(response.data);
      })
      .catch(error => console.log(error));
  };
  deleteNote = id => {
    axios
      .delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        this.props.handleInfo(response.data);
      })
      .catch(error => console.log(error));
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div className="Background-color">
        <div className="NoteContainer">
          {this.state.note.title}
          {this.state.note.textBody}
          {/* {this.state.toggleDelete ? null : (
            <div className="DeleteDiv">
              <h2>You are about to delete this Note</h2>
              <button className="delete" onClick={this.deleteNote}>
                Do It
              </button>
              <button className="dont" onClick={this.unDelete}>
                Don't
              </button>
            </div>
          )}
          {this.state.toggleLinks ? (
            <div className="OptionLinks">
              <h4 onClick={this.editButtons}>Edit</h4>
              <h4 onClick={this.delete}>Delete</h4>
            </div>
          ) : null}
          {this.state.toggleUpdate ? (
            <div>
              <h1>{this.title}</h1>
              <h3>{this.text}</h3>
            </div>
          ) : (
            <div className="EditContainer">
              <h2>Edit Note</h2>
              {this.state.note.title}
              {this.state.note.textBody}
              <form>
                <input
                  className="InputTitle"
                  type="text"
                  placeholder="Title"
                  onChange={this.handleChange}
                  name="editTitle"
                  value={this.state.editTitle}
                />
                <input
                  className="InputContent"
                  type="text"
                  placeholder="Content"
                  onChange={this.handleChange}
                  name="editContent"
                  value={this.state.editContent}
                />
              </form>
              <div className="UpdateNote" onClick={this.updateNote}>
                Update Note
              </div>
            </div>
          )} */}
        </div>
      </div>
    );
  }
}

export default SelectedNote;
