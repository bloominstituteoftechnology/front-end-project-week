import React, { Component } from "react";
import axios from "axios";
import {
  CreateViewWrapper,
  CreateHeader,
  Form,
  TitleInput,
  ContentInput,
  Btn
} from "./Styled";

class EditView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      newTitle: "",
      newTextBody: ""
    };
  }

  editNote = noteId => {
    axios
      .put(
        `https://fe-notes.herokuapp.com/note/edit/${
          noteId}`,
        {title: this.state.newTextBody, textBody: this.state.newTextBody}
      )
      .then(res => {
        this.setState({ notes: res.data});
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
      <CreateViewWrapper>
        <CreateHeader>Edit Note:</CreateHeader>

        <Form onSubmit={this.editNote}>
          <TitleInput
            name="title"
            type="text"
            value={this.state.newTitle}
            onChange={this.changeHandler}
            placeholder="Note Title"
          />
          <ContentInput
            name="textBody"
            type="text"
            value={this.state.newTextBody}
            onChange={this.changeHandler}
            placeholder="Note Content"
          />
          <Btn>Update</Btn>
        </Form>
      </CreateViewWrapper>
    );
  }
}

export default EditView;
