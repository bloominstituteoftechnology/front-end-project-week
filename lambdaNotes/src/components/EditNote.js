import React from "react";
import axios from "axios";
import {
  LeftBar,
  StyledLink,
  TitleH1,
  StyledForm,
  EditFormH1,
  TitleInput,
  BodyInput,
  Formbtn,
  FormContainer,
  SignOut
} from "../Styles";

class EditNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.note.note[0].title,
      content: this.props.note.note[0].content
    };
  }

  handleInputChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  editNote = event => {
    console.log(this.state.editTitle, this.state.editBody);
    event.preventDefault();
    const url = `http://localhost:5000/notes/${
      this.props.note.note[0].id
    }`;

    const updatedNote = {
      title: this.state.title,
      content: this.state.content,
      id: this.props.note.note[0].id
    };

    axios
      .put(url, updatedNote)
      .then(response => {
        console.log(response);
        console.log(updatedNote);

        this.props.updateNotes(updatedNote);
      })
      .catch(error => {
        console.error(error);
      });
    this.props.history.push("/");
  };

  render() {
    return (
      <FormContainer>
        <LeftBar>
          <SignOut onClick={this.props.signOut}>Sign Out</SignOut>
          <TitleH1>Lambda Notes</TitleH1>
          <StyledLink to={"/"}>View Your Notes</StyledLink>
          <StyledLink to={"/note/create"}>Add New Note</StyledLink>
        </LeftBar>
        <StyledForm onSubmit={this.editNote}>
          <EditFormH1>Edit Note</EditFormH1>
          <TitleInput
            type="text"
            name="title"
            placeholder="title"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
          <BodyInput
            type="text"
            name="content"
            placeholder="text body"
            value={this.state.content}
            onChange={this.handleInputChange}
          />
          <Formbtn type="submit">Update</Formbtn>
        </StyledForm>
      </FormContainer>
    );
  }
}

export default EditNote;
