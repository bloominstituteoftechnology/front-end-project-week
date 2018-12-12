import React from "react";
import axios from "axios";
import EditNoteView from "./EditNoteView";
import { Link } from "react-router-dom";
import "../App.css";
import {
  LeftBar,
  StyledLink,
  Modal,
  ModalH3,
  TitleH1,
  NoteCardContainer,
  NoteTitle,
  NoteP,
  EditNoteLink,
  DeleteNoteLink
} from "../Styles";

class NoteView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      title: this.props.notes.title,
      textBody: this.props.notes.content
    };
  }

  editNote = event => {
    event.preventDefault();
    this.setState({ editing: true });
  };

  deleteNote = event => {
    event.preventDefault();
    const url = `http://localhost:3400/note/delete/${
      this.state.note.id
    }`;
    axios
      .delete(url)
      .then(response => {
        console.log(response);
        this.props.updateDeleted(this.state.note.id);
      })
      .catch(error => {
        console.error(error);
      });
    this.props.history.push("/");
  };

  deleteModal = () => {
    document.querySelector(".modal").classList.toggle("show");
  };

  componentDidMount(props) {
    const id = this.props.match.params.id;
    this.fetchNote(id);
  }

  fetchNote = id => {
    // console.log(this.state.id);
    axios
      .get(`http://localhost:3400/api/notes/${id}`)
      .then(response => {
        this.setState(() => ({ note: response.data[0] }));
      })
      .catch(error => {
        console.error(error);
      });
  };

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchNote(newProps.match.params.id);
    }
  }

  render() {
    if (!this.state.note) {
      return <div>Loading Note information...</div>;
    }
    if (this.state.editing === true) {
      return (
        <EditNoteView
          updateNotes={this.props.updateNotes}
          editNote={this.editNote}
          {...this.props}
          note={this.state.note}
        />
      );
    }
    return (
      <div>
        <LeftBar>
          <TitleH1>Lambda Notes</TitleH1>
          <StyledLink to={"/"}>View Your Notes</StyledLink>
          <StyledLink to={"/note/create"}>+ Create New Note</StyledLink>
        </LeftBar>
        <NoteCardContainer>
          <EditNoteLink onClick={this.editNote}>Edit</EditNoteLink>
          <DeleteNoteLink onClick={this.deleteModal}>Delete</DeleteNoteLink>
          <div className='noteContent'>
            <NoteTitle>{this.state.note.title}</NoteTitle>
            <NoteP>{this.state.note.content}</NoteP>
          </div>
        </NoteCardContainer>
        <Modal className="modal">
          <div className="innerModal">
            <ModalH3>Are you sure you want to delete this?</ModalH3>
            <div>
              <button className="btnRed" onClick={this.deleteNote}>
                Delete
              </button>
              <button className="btnAqua" onClick={this.deleteModal}>
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default NoteView;