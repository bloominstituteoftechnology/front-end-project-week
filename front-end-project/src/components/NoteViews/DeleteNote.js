import React, { Component } from "react";
import styled from "react-emotion";

class DeleteNote extends Component {
  sumbitDelete = () => {
    this.props.deleteNote(this.props.match.params.id);
    this.props.notDeleting();
    this.props.history.push("/notes");
  };
  render() {
    const { selectedTheme } = this.props;
    console.log(selectedTheme);

    return (
      <DeleteNoteContainer className="delete-container">
        <DeleteNoteMenu data-theme={selectedTheme} className='delete-menu'>
          <p>Are you want to delete this button?</p>
          <ButtonDiv>
            <DeleteButton
            
              data-theme={selectedTheme}
              onClick={this.sumbitDelete}
            >
              Delete
            </DeleteButton>
            <NoteButton
              data-theme={selectedTheme}
              onClick={this.props.notDeleting}
            >
              Cancel
            </NoteButton>
          </ButtonDiv>
        </DeleteNoteMenu>
      </DeleteNoteContainer>
    );
  }
}

export default DeleteNote;

const DeleteNoteContainer = styled("div")`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  text-align: center;
  background: black;
  z-index: 3;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DeleteNoteMenu = styled("div")`
  margin: auto;
  padding: 30px;
  width: 600px;
  background: ${props => props.theme[props["data-theme"]].subBackground};
  color: ${props => props.theme[props["data-theme"]].subTitle};
  border: 1px solid ${props => props.theme[props["data-theme"]].border};
  opacity: 1;
`;
const NoteButton = styled("div")`
  cursor: pointer;
  margin: 10px 0;
  text-align: center;
  color: ${props => props.theme[props["data-theme"]].subBackground};
  background: ${props => props.theme[props["data-theme"]].button};
  
  padding: 10px;
  width: 200px;
  font-weight: bold;
  transition: transform .2s ease-in-out;
  :hover{
     transform: matrix(1.1, 0, 0, 1.1, 0, 0) !important;
  }
  :active{
    transform: matrix(1, 0, 0, 1, 0, 0) !important;
  }
`;

const DeleteButton = styled(NoteButton)`
  background: ${props => props.theme[props["data-theme"]].delete};
`;

const ButtonDiv = styled("div")`
  margin: auto;
  width: 450px;
  display: flex;
  justify-content: space-around;
`;
