import React from "react";
import axios from "axios";
import styled from "styled-components";
class NoteForm extends React.Component {
  state = {
    title: "",
    textBody: ""
  };
  componentDidMount() {
    if (this.props.toEdit) {
      this.setState({
        title: this.props.note.title,
        textBody: this.props.note.textBody
      });
    }
  }
  handleChange = ev => {
    this.setState({
      [ev.target.name]: ev.target.value
    });
  };
  addNote = ev => {
    ev.preventDefault();
    axios
      .post("https://fe-notes.herokuapp.com/note/create", this.state)
      .then(res => {
        console.log(res);
        this.props.history.push("/myNotes");
      })
      .catch(err => console.log(err));
  };
  editNote = ev => {
    ev.preventDefault();
    axios
      .put(
        `https://fe-notes.herokuapp.com/note/edit/${this.props.note._id}`,
        this.state
      )
      .then(res => {
        console.log(res);
        alert("edit successful");
        this.props.history.push("/myNotes");
      })
      .catch(err => {
        console.log(err);
        alert("encountered an error saving the update");
      });
  };
  render() {
    return (
      <StyledForm onSubmit={this.props.toEdit ? this.editNote : this.addNote}>
        <h1>{this.props.toEdit ? "Edit Note" : "Add a Note"}</h1>
        <input
          name="title"
          value={this.state.title}
          placeholder="note title"
          onChange={this.handleChange}
        />
        <textarea
          name="textBody"
          value={this.state.textBody}
          placeholder="note..."
          onChange={this.handleChange}
        />
        <button type="submit">
          {this.props.toEdit ? "Update Note" : "Add Note"}
        </button>
      </StyledForm>
    );
  }
}
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  input {
    max-width: 300px;
    margin: 10px;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
  }
  textarea {
    height: 300px;
    margin: 10px;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
  }
  button {
    width: 250px;
    padding: 10px;
    margin: 10px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background: yellow;
    cursor: pointer;
    &:hover {
      background: white;
      color: yellow;
    }
  }
`;
export default NoteForm;
