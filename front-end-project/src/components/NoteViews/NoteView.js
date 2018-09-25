import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import styled from "react-emotion";
import DeleteNote from './DeleteNote'

class NoteView extends Component {
  state= {
      isDeleting: false,
  }

  notDeleting = () =>{
      this.setState({isDeleting: false})
  }

  render() {
    const note = this.props.notes.find(
      note => note.id === parseInt(this.props.match.params.id, 10)
    );
    const { selectedTheme } = this.props;
    const { title, content, id } = note;
    const {isDeleting} = this.state
 
    console.log(selectedTheme)
    return (
      <Fragment>
          {isDeleting && <DeleteNote {...this.props} notDeleting={this.notDeleting}/> }
          <NoteCardDiv>
          <NoteTitle data-theme={selectedTheme}>{title}</NoteTitle>
         <p>{content}</p>

        <NoteButton
          data-theme={selectedTheme}
          onClick={() => this.props.history.push(`/notes/${id}/create`)}
        >
        Update
        </NoteButton>
        <NoteButton data-theme={selectedTheme} 
        onClick={() => this.setState({isDeleting:true})}
        >
          Delete
        </NoteButton>
      </NoteCardDiv>
      </Fragment>  
      
    );
  }
}

const NoteCardDiv = styled("div")`
  width: 500px;
`;

const NoteTitle = styled('h2') `
  color: ${props => props.theme[props["data-theme"]].mainTitle};
`

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
