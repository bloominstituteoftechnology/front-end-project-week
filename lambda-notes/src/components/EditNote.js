import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class EditNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: "",
      addedNote: false,
      note: null,
      editedNote: false
    };
  }

  editNote = event => {
    event.preventDefault();
    const newNote = {
      title: this.state.title,
      textBody: this.state.textBody
    };
    console.log("newNote", newNote);
    this.props.editNote(newNote);

    this.setState({
      title: "",
      textBody: ""
    });
    this.setState({
      addedNote: true
    });
  };

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    if (this.state.title !== "" && this.state.body !== "") {
      const newNote = {
        title: this.state.title,
        textBody: this.state.body
      };

      if (this.state.note !== null) {
        axios
          .put(
            `https://fe-notes.herokuapp.com/note/edit/${this.state.note._id}`,
            newNote
          )
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          });
      }
      this.setState({
        added: true,
        title: "",
        body: "",
        note: null
      });
    }
    event.target.reset();
  };

  render() {
    if (this.state.addedNote === true) {
      return <Redirect to={`notes/${this.props.note._id}`} />;
    }
    return (
      <div>
        <h2 className="header">EDIT NOTE:</h2>
        <form className="form" onSubmit={this.editNote}>
          <input
            onChange={this.handleInputChange}
            name="title"
            placeholder="Note Title"
            className="input1"
            value={
              this.state.note !== null
                ? this.state.note.textBody
                : this.props.value
            }
            required
          />
          <input
            onChange={this.handleInputChange}
            name="textBody"
            placeholder="Note Content"
            className="input2"
            value={
              this.state.note !== null
                ? this.state.note.textBody
                : this.props.value
            }
            required
          />
          <button className="submit" type="submit">
            Save edit
          </button>
        </form>
      </div>
    );
  }
}

export default EditNote;
