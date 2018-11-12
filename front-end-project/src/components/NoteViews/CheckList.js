import React, { Component } from "react";
import styled from "react-emotion";

class CheckList extends Component {
  

  addChecklist = event => {
    event.preventDefault()    
    const { note , addChecklist } = this.props;
    addChecklist(note)
  };

  render() {
   
    const { note, checklist, selectedTheme } = this.props;

    return (
      <CheckListContainer>
        <NoteTitle className= 'note-view' data-theme={selectedTheme}>CheckList</NoteTitle>
        <NoteButton onClick={this.addChecklist} className= 'note-view' data-theme={selectedTheme}>{ (!checklist.some(checkitem => checkitem._id === note._id)) ?'Add Note To List':'Remove Note'}</NoteButton>
        <div>
          {checklist.map(checkitem => (
            <p className= 'note-view' onClick={() => this.props.history.push(`/notes/${checkitem._id}`)}>{checkitem.title}</p>
          ))}
        </div>

        
      </CheckListContainer>
    );
  }
}

const CheckListContainer = styled("div")`
  display: flex;

  flex-direction: column;
  text-align: center;
`;

const NoteTitle = styled("h2")`
  color: ${props => props.theme[props["data-theme"]].mainTitle};
`;

const NoteButton = styled("div")`
  cursor: pointer;
  margin: 10px 0;
  text-align: center;
  color: ${props => props.theme[props["data-theme"]].subBackground};
  background: ${props => props.theme[props["data-theme"]].button};
  
  padding: 10px;
  min-width:150px;
  font-weight: bold;
  transition: transform .2s ease-in-out;
  :hover{
     transform: matrix(1.1, 0, 0, 1.1, 0, 0) !important;
  }
  :active{
    transform: matrix(1, 0, 0, 1, 0, 0) !important;
  }
`;

export default CheckList;
