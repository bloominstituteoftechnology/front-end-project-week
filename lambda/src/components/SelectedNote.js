import React from "react";
import axios from "axios";

class SelectedNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: null,
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

  getNote = () => {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/id`)
      .then(response => {
        this.setState(() => ({ note: response.data }));
      })
      .catch(error => {
        console.log(error);
      });
  };
  delete = () => {
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
      .put(
        `https://killer-notes.herokuapp.com/note/edit/${this.id}`,
        updatedNote
      )
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
      .delete(`https://killer-notes.herokuapp.com/note/delete/${this.id}`)
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
      <div className="NoteContainer">
        {this.state.toggleDelete ? null : (
          <div className="DeleteDiv">
            <h2>You are about to delete this Note</h2>
            <button className="delete" onClick={this.deleteNote}>
              Do It
            </button>
            <button className="dont" onClick={this.delete}>
              Don't
            </button>
          </div>
        )}
        {this.state.toggleLinks ? (
          <div className="optionLinks">
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
            <form>
              <div
                className="InputTitle"
                type="text"
                placeholder="Title"
                onChange={this.handleChange}
                name="editTitle"
                value={this.state.editTitle}
              >
                <div
                  className="InputContent"
                  type="text"
                  placeholder="Content"
                  onChange={this.handleChange}
                  name="editContent"
                  value={this.state.editContent}
                />
              </div>
            </form>
            <div className="UpdateNote" onClick={this.updateNote}>
              Update Note
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SelectedNote;
