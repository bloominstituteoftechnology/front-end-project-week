import React, { Component, Fragment } from "react";
import styled from "react-emotion";

class NewNote extends Component {
  state = {
    titleInput: "",
    contentInput: "",
    show: true
  };

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state.contentInput);
  };

  sumbitNote = () => {
    const note = {
      title: this.state.titleInput,
      content: this.state.contentInput
    };
    this.props.createNewNote(note);
    this.setState({
      titleInput: "",
      contentInput: ""
    });
    this.props.history.push(`/notes`)
  };

  render() {
    const { selectedTheme } = this.props;
    const { titleInput, contentInput } = this.state;
    return (
      <NoteForm>
        <NoteTitle data-theme={selectedTheme}>Create New Note:</NoteTitle>
        <NoteInput
          name="titleInput"
          placeholder={"Note Text"}
          value={titleInput}
          onChange={this.handleInput}
        />
        <NoteText
          name="contentInput"
          placeholder={"Note Content"}
          value={contentInput}
          onChange={this.handleInput}
        />
        <NoteButton data-theme={selectedTheme} onClick={this.sumbitNote }>Save</NoteButton>
      </NoteForm>
    );
  }
}

const NoteInput = styled("input")`
  width: 300px;
  height: 30px;
  margin-bottom: 10px;
`;
const NoteText = styled("textarea")`
  width: 500px;
  height: 400px;
`;
const NoteButton = styled("div")`
  cursor: pointer;
  margin: 10px 0;
  text-align: center;
  color: ${props => props.theme[props["data-theme"]].subBackground};
  background: ${props => props.theme[props["data-theme"]].button};
  border: 1px solid ${props => props.theme[props["data-theme"]].border};
  padding: 10px;
  width: 200px;
  font-weight: bold;
`;

const NoteTitle = styled('h2') `
  color: ${props => props.theme[props["data-theme"]].mainTitle};
`

const NoteForm = styled("form")`
  display: flex;
  flex-direction: column;
`;

export default NewNote;
