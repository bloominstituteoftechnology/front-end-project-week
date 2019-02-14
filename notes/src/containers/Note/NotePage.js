import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Main,
  Modal,
  Container,
  Content,
  Button,
  LinkBtns,
  NvLinks
} from "../Styles/stylesNotePage";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import { fetchNotes, deleteNote } from "../../actions/noteActions";

// Modal Button Colors
Button.defaultProps = {
  theme: {
    bg: "#00cec9"
  }
};
const theme = {
  bg: "red"
};

class NotePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delete: false
    };
  }
  deleteNoteOn = () => {
    this.setState({ delete: true });
  };
  deleteNoteOff = e => {
    e.preventDefault();
    this.setState({ delete: false });
  };
  // editContent = (title, textBody) => {
  //   this.setState({ title: title, textBody: textBody })
  //
  deleted = () => {
    deleteNote(this.props.notes.id)
  }
  componentDidMount() {
    this.props.fetchNotes();
  }
  render() {
    if (this.props.notes.length) {
      let note = this.props.notes.find(
        note => `${note.id}` === this.props.match.params.id
      );

      const deleted = e => {
        e.preventDefault();
        this.props.deleteNote(note.id);
        this.props.history.push("/");
      };
      return (
        <Main key={note.id}>
          {this.state.delete && (
            <Modal>
              <Container>
                <p>Are you sure you want to delete this?</p>
                <Content>
                  <ThemeProvider theme={theme}>
                    <Button onClick={deleted}>Delete</Button>
                  </ThemeProvider>
                  <Button onClick={this.deleteNoteOff}>No</Button>
                </Content>
              </Container>
            </Modal>
          )}
          <NvLinks>
            <Link to={`/note/${note.id}/edit`}>
              <LinkBtns>
                edit
              </LinkBtns>
            </Link>
            {""}
            <LinkBtns onClick={this.deleteNoteOn}>delete</LinkBtns>
          </NvLinks>
          <h1>{note.title}</h1>
          <p>{note.textBody}</p>
        </Main>
      );
    }
  }
}
const mapStateToProps = state => ({
  notes: state.noteReducer.notes
});
export default connect(mapStateToProps, {fetchNotes, deleteNote})(NotePage);
