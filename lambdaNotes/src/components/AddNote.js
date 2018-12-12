import React from "react";
import Axios from "axios";
import {
  LeftBar,
  StyledLink,
  FormH1,
  TitleInput,
  BodyInput,
  StyledForm,
  Formbtn,
  TitleH1,
  FormContainer,
  SignOut
} from "../Styles";

class AddNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.notes.title,
      content: this.props.notes.content,
      id: this.props.notes.id
    };
  }

  handleInputChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newNote = {
      tags: [],
      title: this.state.title,
      content: this.state.content,
      id: this.state.id
    };
    Axios.post("http://localhost:5000/addNote", newNote)
      .then(response => {
        console.log(response.data);
        newNote.id = response.data.id;
        this.props.addNewNotes(newNote);
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
        <StyledForm onSubmit={this.handleSubmit}>
          <FormH1>Create New Note:</FormH1>
          <TitleInput
            type="text"
            name="title"
            placeholder="Note Title"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
          <BodyInput
            type="textarea"
            name="content"
            placeholder="Note content"
            value={this.state.content}
            onChange={this.handleInputChange}
          />
          <Formbtn type="submit">Save</Formbtn>
        </StyledForm>
      </FormContainer>
    );
  }
}

export default AddNote;
