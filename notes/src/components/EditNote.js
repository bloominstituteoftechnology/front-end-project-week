import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const EditNoteContainer = styled.div`
  padding-top: 50px;
`;

const EditNoteHeader = styled.h2`
  display: flex;
  flex-direction: row;
  color: #4a494a;
  font-size: 2.4rem;
  margin-bottom: 30px;
  font-weight: bold;
`;

const EditNoteForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 93%;
`;

const TitleNoteInput = styled.input`
  border: 1px solid #979797;
  border-radius: 3px;
  width: 50%;
  height: 35px;
  padding: 0 5px 0 5px;
  font-size: 0.9rem;
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
`;

const NoteTextBodyInput = styled.textarea`
  border: 1px solid #979797;
  border-radius: 3px;
  width: 100%;
  height: 600px;
  padding: 12px 5px 0 5px;
  font-size: 0.9rem;
  box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
`;

const UpdateNoteButton = styled.button`
  display: block;
  border: 1px solid #959898;
  outline: none;
  text-decoration: none;
  background-color: #5dbec3;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  cursor: pointer;
  text-align: center;
  font-weight: bold;
  padding: 0.8rem 0;
  width: 35%;
  margin-bottom: 40px;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

class EditNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteToEdit: {},
      updatedTitle: null,
      updatedTextBody: null,
      loading: true
    };
  }

  updateTitleInputHandler = e => {
    this.setState({
      updatedTitle: e.target.value
    });
  };

  updateTextBodyInputHandler = e => {
    this.setState({
      updatedTextBody: e.target.value,
      noteToEdit: {
        textBody: e.target.value
      }
    });
  };

  submitEdits = e => {
    e.preventDefault();
    axios
      .put(
        `https://fe-notes.herokuapp.com/note/edit/${
          this.props.match.params.id
        }`,
        {
          title: this.state.updatedTitle,
          textBody: this.state.updatedTextBody
        }
      )
      .then(response => {
        this.props.refreshMain();
        this.props.history.push(`/notes/${this.props.match.params.id}`);
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchNote(id);
  }

  fetchNote = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState(
          {
            noteToEdit: response.data,
            loading: false
          },
          console.log(response.data)
        );
      })
      .catch(err => {
        this.setState({ loading: false });
        console.log(err);
      });
  };

  render() {
    return (
      <EditNoteContainer>
        <EditNoteHeader>Edit Note:</EditNoteHeader>
        <EditNoteForm onSubmit={this.submitEdits}>
          <TitleNoteInput
            type="text"
            name="title"
            defaultValue={this.state.noteToEdit.title}
            onChange={this.updateTitleInputHandler}
          />
          <NoteTextBodyInput
            name="textBody"
            onChange={this.updateTextBodyInputHandler}
            value={this.state.noteToEdit.textBody}
          />
          <UpdateNoteButton type="submit">Update</UpdateNoteButton>
        </EditNoteForm>
      </EditNoteContainer>
    );
  }
}

export default EditNote;
