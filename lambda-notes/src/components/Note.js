import React from "react";
import axios from "axios";
import NoteCard from "./NoteCard";
import EditNote from "./EditNote";
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

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      title: this.props.notes.title,
      textBody: this.props.notes.textBody
    };
  }

  editNote = event => {
    event.preventDefault();
    this.setState({ editing: true });
  };

  deleteNote = event => {
    event.preventDefault();
    const url = `https://fe-notes.herokuapp.com/note/delete/${
      this.state.note._id
    }`;
    axios
      .delete(url)
      .then(response => {
        console.log(response);
        this.props.updateDeleted(this.state.note._id);
      })
      .catch(error => {
        console.error(error);
      });
    this.props.history.push("/");
  };

  deleteModal = () => {
      console.log('button clicked')
    document.querySelector(".modal").classList.toggle("show");
  };

  componentDidMount(props) {
    const id = this.props.match.params.id;
    this.fetchNote(id);
  }

  fetchNote = id => {
    // console.log(this.state.id);
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState(() => ({ note: response.data }));
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
        <EditNote
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
          <StyledLink to={"/note/create"}>Add New Note</StyledLink>
        </LeftBar>
        <NoteCardContainer>
          {/* <NoteCard note={this.state.note} />
          <button onClick={this.editNote}>Edit</button>
          <button onClick={this.deleteModal}>Delete</button> */}
          <EditNoteLink onClick={this.editNote}>Edit</EditNoteLink>
          <DeleteNoteLink onClick={this.deleteModal}>Delete</DeleteNoteLink>
          <NoteTitle>{this.state.note.title}</NoteTitle>
          <NoteP>{this.state.note.textBody}</NoteP>
        </NoteCardContainer>
        <div className="modal">
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
        </div>
      </div>
    );
  }
}

export default Note;
