import React, { Component } from "react";

import axios from "axios";
import { URL } from "../constants";

import {
  MainContent,
  NoteWrapper,
  EditDelete,
  Delete,
  DeleteModal,
  Button
} from "../styles";

export default class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: null,
      showDelete: false
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.fetchNote(id);
  }

  fetchNote = id => {
    axios
      .get(`${URL}get/${id}`)
      .then(res => this.setState({ note: res.data }))
      .catch(err => console.log(err));
  };

  showDelete = e => {
    e.preventDefault();
    this.setState({
      showDelete: true
    });
  };

  cancelDelete = e => {
    e.preventDefault();
    this.setState({
      showDelete: false
    })
  }

  render() {
    if (!this.state.note) {
      return <div>Loading...</div>;
    }

    return (
      <MainContent>
        <NoteWrapper>
          <h2>{this.state.note.title}</h2>
          <p> {this.state.note.textBody}</p>
          <EditDelete>
            <button
              onClick={() => this.props.handleUpdate(this.state.note._id)}
            >
              Edit
            </button>

            <button onClick={this.showDelete}>Delete</button>
          </EditDelete>
        </NoteWrapper>
        <Delete
          style={
            this.state.showDelete ? { display: "flex" } : { display: "none" }
          }
        >
          <DeleteModal>
            <h2>Are you sure you want to delete this?</h2>
            <div>
            <Button
              delete
              onClick={() => this.props.handleDelete(this.state.note._id)}
            >
              Delete
            </Button>
            <Button onClick={this.cancelDelete}>No</Button>
            </div>
          </DeleteModal>
        </Delete>
      </MainContent>
    );
  }
}
