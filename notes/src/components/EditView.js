import React, { Component } from "react";
import axios from "axios";
import { CreateViewWrapper, CreateHeader, Form, TitleInput, ContentInput, Btn } from "./Styled";

class EditView extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      note: {
      title: "",
      textBody: ""
      },
      isUpdating: false
    };
  }


   
  editNote = e => {
    e.preventDefault();
    axios
      .put(
        `https://fe-notes.herokuapp.com/note/edit/${
          this.props.match.params.id
        }`,
        this.state.note
      )
      .then(res => {
        this.setState({ notes: res.data });
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
          <Btn type="submit">Update</Btn>
        </Form>
      </CreateViewWrapper>
    );
  }
}

export default EditView;
