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
    FormContainer
  } from "../Styles";

class EditNoteView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.note.title,
      text: this.props.note.content
    };
  }

  handleInputChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  editNote = event => {
    console.log(this.state.editTitle, this.state.editBody);
    event.preventDefault();
    const url = `http://localhost:3400/api/notes/${
      this.props.note._id
    }`;
    axios
      .put(url, {
        title: this.state.title,
        textBody: this.state.text
      })
      .then(response => {
        console.log(response);
        this.props.updateNotes(response.data);
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
          <TitleH1>Lambda Notes</TitleH1>
          <StyledLink to={"/"}>View Your Notes</StyledLink>
          <StyledLink to={"/api/notes"}>+ Create New Note</StyledLink>
        </LeftBar>
        <div className ='formHolder'>
        <form className='form' onSubmit={this.editNote}>
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
            name="text"
            placeholder="text body"
            value={this.state.text}
            onChange={this.handleInputChange}
            
          />
          <button className='saveBtn' type="submit">Update</button>
        </form>
        </div>
      </FormContainer>
    );
  }
}

export default EditNoteView;