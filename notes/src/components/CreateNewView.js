import React, {Component} from "react";
import { CreateViewWrapper, CreateHeader, Form, TitleInput, ContentInput, Btn, } from "./Styled";
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
    <CreateViewWrapper>
      <CreateHeader>Create New Note:</CreateHeader>

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
        <Btn type="submit">Save</Btn>

      </Form>
    </CreateViewWrapper>
  );
};
}

export default CreateNewView;
