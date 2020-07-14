import React from "react";
import { Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import MainButton from "../MainButton/MainButton";

export default class NewNoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      title: "",
      textBody: ""
    };
  }
  addNote = event => {
    event.preventDefault();
    axios.post("https://killer-notes.herokuapp.com/note/create", {
      ...this.state
    });
    this.setState({
      tags: [],
      title: "",
      textBody: ""
    });
  };
  handleInputChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        <h2>Create New Note:</h2>
        <Form onSubmit={this.addNote}>
          <FormGroup>
            <Input
              onChange={this.handleInputChange}
              value={this.state.title}
              type="text"
              name="title"
              placeholder="Note Title"
            />
          </FormGroup>
          <FormGroup>
            <Input
              onChange={this.handleInputChange}
              value={this.state.textBody}
              type="textarea"
              name="textBody"
              placeholder="Note Content"
            />
          </FormGroup>
          <MainButton name="Save" type="submit" />
        </Form>
      </div>
    );
  }
}
