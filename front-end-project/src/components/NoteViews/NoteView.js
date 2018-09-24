import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import styled from "react-emotion";

class NoteView extends Component {
  state = {
    titleInput: "",
    contentInput: "",
    isEditing: false,
    isDeleting: false,
    show: true
  };

  handleInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state.titleInput);
  };

  sumbitNote = id => {
    this.props.updateNote({
      id: id,
      title: this.state.titleInput,
      content: this.state.contentInput
    });
  };

  

  render() {
    const note = this.props.notes.find(
      note => note.id === parseInt(this.props.match.params.id, 10)
    );
    const { selectedTheme } = this.props;
    const { id, title, content } = note;
    const { titleInput, contentInput, isEditing, show } = this.state;
    console.log(selectedTheme)
    return (
      <NoteCardDiv>
        {isEditing ? <h2>Update Notes:</h2> : <h2>{title}</h2>}
        {isEditing && (
          <NoteInput
            name={"titleInput"}
            onChange={this.handleInput}
            value={titleInput}
          />
        )}
        {isEditing ? (
          <NoteText
            name={"contentInput"}
            onChange={this.handleInput}
            value={contentInput}
          />
        ) : (
          <p>{content}</p>
        )}
        <NoteButton
          data-theme={selectedTheme}
          onClick={() => {
            if (titleInput && contentInput) {
              this.sumbitNote(id);
            }

            this.setState(state => ({ isEditing: !state.isEditing }));
          }}
        >
          {isEditing ? 'Cancel':'Update'}
        </NoteButton>
        <NoteButton data-theme={selectedTheme}>
          Delete
        </NoteButton>
      </NoteCardDiv>
    );
  }
}

const NoteCardDiv = styled("div")`
  width: 500px;
`;

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

export default NoteView;
