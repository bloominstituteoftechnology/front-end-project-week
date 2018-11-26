import React from "react";
import { IndNoteContainer, NoteToolDiv, IndNoteText, IndNoteTitle, ToolBtn} from "../../Styles/IndividualNoteStyles";
import Modal from 'react-modal'
import {ModalDiv, ModalText, KeepButton, KeepButtonText,
  DeleteButtonText, DeleteButton} from '../../Styles/DeleteModalStyles'

class IndividualNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {},
      modalIsOpen: false,
    };
  }
componentDidMount() {
    const noteId = this.props.match.params.id
    this.setState({
      note: this.props.notes.find(note => note._id == noteId)
      })
}
openModal = () => {
  this.setState({modalIsOpen: true})
}
closeModal = () => {
  this.setState({modalIsOpen: false})
}
  render() {
      const {title, textBody, tags} = this.state.note;
    return (
      <IndNoteContainer> 
        <NoteToolDiv>
            <ToolBtn onClick={ev => {this.props.toggleEditNoteForm(ev, this.state.note); this.props.history.push('/form')}}>edit</ToolBtn> <ToolBtn onClick={() => this.openModal()}>delete</ToolBtn>
        </NoteToolDiv>
        <IndNoteTitle>
          {title}
        </IndNoteTitle>
        <IndNoteText>
          {textBody}
        </IndNoteText>
        <Modal isOpen={this.state.modalIsOpen}onRequestClose={this.closeModal}style={custom}>
          <ModalText>Are you sure you want to delete?</ModalText>
            <ModalDiv>
              <KeepButton onClick={() => this.closeModal()}>
                <KeepButtonText>Keep</KeepButtonText>
              </KeepButton>
              <DeleteButton onClick={ev => {this.props.deleteNote(ev, this.props.match.params.id); this.props.history.push('/home')}}>
                <DeleteButtonText>Delete</DeleteButtonText>
              </DeleteButton>
            </ModalDiv>
        </Modal>
        <IndNoteText>{tags}</IndNoteText>
      </IndNoteContainer>
     
    );
  }
}

const custom = {
  overlay: {
    backgroundColor: "rgba(242, 241, 242, 0.75)"
  },
  content: {
    position: "absolute",
    top: "200px",
    left: "30%",
    right: "30%",
    bottom: "40%",
    border: "1px solid grey",
    background: "tan",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "none",
    outline: "none",
    padding: "20px"

  }
}



export default IndividualNote;