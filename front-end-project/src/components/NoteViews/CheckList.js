import React, { Component } from "react";
import styled from "react-emotion";

class CheckList extends Component {
  

  addChecklist = event => {
    event.preventDefault()    
    const { note , addChecklist } = this.props;
    addChecklist(note)
  };

  render() {
   
    const { note, checklist } = this.props;

    return (
      <CheckListContainer>
        <h2>CheckList</h2>
        <button onClick={this.addChecklist}>sumbit</button>
        <div>
          {checklist.map(checkitem => (
            <p onClick={() => this.props.history.push(`/notes/${checkitem._id}`)}>{checkitem.title}</p>
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

export default CheckList;
