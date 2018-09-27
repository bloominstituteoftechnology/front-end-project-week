import React from "react";
import axios from "axios";
import SideView from "./SideView";
// import NotesForm from "./NotesForm";
// import CreateNote from "./CreateNote";

class SelectedNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: "",
      toggleUpdate: true,
      toggleDelete: true,
      toggleLinks: true,
      updateTitle: "",
      updateContent: ""
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
        console.log("HELLO FROM GET - RESPONSE IS: ", response.data);
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
          updateTitle: "",
          updateContent: ""
        });
        this.props.history.push("/notes");
        // this.getNote(this.props.match.params.id);
        this.props.handleInfo(response.data);
        // axios
        //   .get("https://killer-notes.herokuapp.com/note/get/all")
        //   .then(response => {
        //     this.setState({
        //       updateTitle: "",
        //       updateContent: ""
        //     });
        //   })
        //   .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  };
  deleteNote = id => {
    axios
      .delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        console.log("HELLO FROM DELETE: ", response.data);
        this.props.history.push("/notes");
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
          <div className="SelectedTitle">{this.state.note.title}</div>
          <div className="SelectedText">{this.state.note.textBody}</div>

          {this.state.toggleDelete ? null : (
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
              <h4 onClick={this.unDelete}>Delete</h4>
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
                <div className="InputDivs">
                  <input
                    className="InputTitle"
                    type="text"
                    placeholder="Title"
                    onChange={this.handleChange}
                    name="updateTitle"
                    value={this.state.updateTitle}
                  />
                  <input
                    className="InputContent"
                    type="text"
                    placeholder="Content"
                    onChange={this.handleChange}
                    name="updateContent"
                    value={this.state.updateContent}
                  />
                </div>
              </form>
              <button className="UpdateNote" onClick={this.updateNote}>
                Update Note
              </button>
            </div>
          )}
        </div>
        <SideView />
      </div>
    );
  }
}

export default SelectedNote;
