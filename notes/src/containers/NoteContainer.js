import React, { Component } from "react";
import { MainContent } from "../styles";
import axios from "axios";
import NoteList from "../components/NoteList";
import { URL } from "../constants"

class NoteContainer extends Component {
  constructor() {
    super();

    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    axios
      .get(URL)
      .then(res => this.setState({ notes: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <MainContent>
        <h2>Your Notes:</h2>
        <NoteList notes={this.state.notes} />
      </MainContent>
    );
  }
}

export default NoteContainer;
