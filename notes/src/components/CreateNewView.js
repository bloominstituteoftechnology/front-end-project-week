import React, { Component } from "react";
import {NoteFormWrapper, Form} from './Styled';

class CreateNewView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      textBody: ""
    };
  }

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  add = (e, obj) => {
    e.preventDefault();
    this.props.addNote(e, obj);
    this.setState({ title: "", textBody: "" });
  };

  render() {
    return (
      <NoteFormWrapper>
        <h2>Create New Note:</h2>
       
        <Form
        onSubmit={e =>
          this.add(e, {
            title: this.state.title,
            txt: this.state.textBody
          })
        }
        >
          <input placeholder="Note Title" />
          <input placeholder="Note Content"/>
          <button>Save</button>
        </Form>
       
      </NoteFormWrapper>
    );
  }
}

export default CreateNewView;
