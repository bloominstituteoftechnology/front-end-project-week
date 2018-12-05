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
      title: "",
      textBody: "",
      id: ""
    };
  }

  componentDidMount() {
    console.log("TEST");
    axios
      .get(
        `https://fe-notes.herokuapp.com/note/get/${this.props.match.params.id}`
      )
      .then(res => {
        console.log(res, "check res");
        this.setState({
          textBody: res.data.textBody,
          title: res.data.title,
          id: res.data._id
        });
      })
      .catch(err => console.log(err));
  }

  editNote = e => {
    e.preventDefault();
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${this.state.id}`, {
        title: this.state.title,
        textBody: this.state.textBody
      })
      .then(() => {
        console.log("SUCCESS");
      })
      .catch(err => {
        console.log(err, "cannot edit this note");
      });
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
          <Btn>Update</Btn>
        </Form>
      </CreateViewWrapper>
    );
  }
}

export default EditView;
