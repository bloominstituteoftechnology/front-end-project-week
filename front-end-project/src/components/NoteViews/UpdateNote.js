import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import styled from "react-emotion";

class UpdateNote extends Component {
  state = {
    titleInput: "",
    contentInput: "",
    // isEditing: false,
    // isDeleting: false,
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
    // const { id, title, content } = note;
    const { titleInput, contentInput} = this.state;
    console.log(selectedTheme)
    return (
      <NoteCardDiv>
        {<NoteTitle data-theme={selectedTheme}>Update Notes:</NoteTitle>}
        {
          <NoteInput
            name={"titleInput"}
            onChange={this.handleInput}
            value={titleInput}
          />
        }
        {
          <NoteText
            name={"contentInput"}
            onChange={this.handleInput}
            value={contentInput}
          />}
        <NoteButton
          data-theme={selectedTheme}
          onClick={() => {
            if (titleInput && contentInput) {
              this.sumbitNote(parseInt(this.props.match.params.id, 10));
            }
            this.props.history.push('/notes')
            
          }}
        >
          Sumbit
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

const NoteTitle = styled('h2') `
  color: ${props => props.theme[props["data-theme"]].mainTitle};
`
export default UpdateNote;
