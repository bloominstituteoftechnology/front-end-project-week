import React from "react";
import Axios from "axios";
import { LeftBar, StyledLink, FormH1, TitleInput, BodyInput, StyledForm, Formbtn } from '../Styles';

class AddNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.notes.title,
      text: this.props.notes.textBody,
      _id: this.props.notes._id
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
      textBody: this.state.text,
      _id: this.state._id
    };
    Axios.post("https://fe-notes.herokuapp.com/note/create", newNote)
      .then(response => {
        console.log(response.data);
        newNote._id = response.data.success
        this.props.addNewNotes(newNote);
      })
      .catch(error => {
        console.error(error);
      });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <LeftBar>
          <StyledLink to={"/"}>Lambda Notes</StyledLink>
          <StyledLink to={"/note/create"}>Add New Note</StyledLink>
        </LeftBar>
        <StyledForm onSubmit={this.handleSubmit}>
          <FormH1>New Note</FormH1>
          <TitleInput
            type="text"
            name="title"
            placeholder="Note Title"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
          <BodyInput
            type="textarea"
            name="text"
            placeholder="Note content"
            value={this.state.text}
            onChange={this.handleInputChange}
          />
          <Formbtn type="submit">Save</Formbtn>
        </StyledForm>
      </div>
    );
  }
}

export default AddNote;
