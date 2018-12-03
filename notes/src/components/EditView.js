import React, { Component } from "react";
import axios from "axios";
import { NoteFormWrapper, Form, TitleInput, ContentInput, Btn } from "./Styled";

class EditView extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      textBody: "",
      id: null
    };
  }

  editNote = e => {
    e.preventDefault();
    axios
      .put(
        `https://fe-notes.herokuapp.com/note/edit/${this.props.match.params.id}`, this.state
      )
      .then(res => {
        this.setState({ title: res.data.title, textBody: res.data.textBody });
      })
      .catch(err => console.log(err, "cannot edit this note"));
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <NoteFormWrapper>
        <h2>Edit Note:</h2>

        <Form onSubmit={this.editNote}>
          <TitleInput
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.changeHandler}
            placeholder="Note Title"
          />
          <ContentInput
            name="textBody"
            type="text"
            value={this.state.textBody}
            onChange={this.changeHandler}
            placeholder="Note Content"
          />
          <Btn>Update</Btn>
        </Form>
      </NoteFormWrapper>
    );
  }
}

export default EditView;
