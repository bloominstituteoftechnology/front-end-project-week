import React, { Component } from "react";

import axios from "axios";
import { URL } from "../constants";

import { MainContent, NoteWrapper, EditDelete } from "../styles";

export default class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: null
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
            <span>Edit</span>
            <span onClick={() => this.props.handleDelete(this.state.note.id)}>
              Delete
            </span>
          </EditDelete>
        </NoteWrapper>
      </MainContent>
    );
  }
}
