import React, {Component} from "react";
import { NoteFormWrapper, Form, TitleInput, ContentInput, Btn } from "./Styled";
import axios from 'axios';
class CreateNewView extends Component {
  constructor() {
    super()
    this.state= {
        title: '',
        textBody: ''

      
    }
  }
  addNote = e => {
    e.preventDefault();
    axios
      .post("https://fe-notes.herokuapp.com/note/create", this.state)
      .then(res => {
        this.setState({ title: '', textBody: '' });
      })
      .catch(err => console.log(err, "failed to create"));
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
render() {
  return (
    <NoteFormWrapper>
      <h2>Create New Note:</h2>

      <Form
        onSubmit={
          this.addNote}
      >
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
        <Btn>Save</Btn>

      </Form>
    </NoteFormWrapper>
  );
};
}

export default CreateNewView;
