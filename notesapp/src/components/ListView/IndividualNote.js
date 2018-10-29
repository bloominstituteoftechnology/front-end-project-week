import React from "react";
import { IndNoteContainer, NoteToolDiv, IndNoteText, IndNoteTitle, ToolBtn} from "../../Styles/IndividualNoteStyles";


class IndividualNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {}
    };
  }

componentDidMount() {
    const noteId = this.props.location.pathname.split('/')
    this.setState({
      note: this.props.notes.find(note => note._id == noteId[2])
      })
}

  render() {
      const {title, textBody} = this.state.note;
    return (
    
        
        <IndNoteContainer> 
            <NoteToolDiv>
                <ToolBtn>edit</ToolBtn> <ToolBtn>delete</ToolBtn>
            </NoteToolDiv>
            <IndNoteTitle>{title}</IndNoteTitle>
            <IndNoteText>{textBody}</IndNoteText>


            
        </IndNoteContainer>
     
    );
  }
}

export default IndividualNote;
