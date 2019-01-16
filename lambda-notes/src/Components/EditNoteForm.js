/*Edit Note Form
  Takes in user input and edits the note they previously clicked on
*/

// Finish making it so the note keeps the original title and content when a user clicks on edit

import React from "react";
import axios from "axios";
import { InputHeader, InputBody, Buttons } from "../Styles/Styles";

class EditNoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: ""
    };
  }

  componentDidMount() {
    this.setState({
      title: this.props.currentNote.title,
      textBody: this.props.currentNote.textBody
    });
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    axios
      .put(
        `https://fe-notes.herokuapp.com/note/edit/${
          this.props.match.params.id
        }`,
        this.state
      )
      .then(() => this.props.history.push("/"))
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Edit Note:</h2>
        <form onSubmit={this.submitHandler}>
          <InputHeader
            name="title"
            placeholder="Note Title"
            value={this.state.title}
            onChange={this.inputHandler}
          />
          <InputBody
            name="textBody"
            placeholder="Note Content"
            value={this.state.textBody}
            onChange={this.inputHandler}
          />
          <Buttons type="submit">Update</Buttons>
        </form>
      </div>
    );
  }
}

export default EditNoteForm;
