import React from "react";
import axios from "axios";
import Note from "./note";
import styled from "styled-components";
class MyNotes extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }
  componentDidMount() {
    console.log("my notes mounted");
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(res => this.setState({ notes: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <>
        <h1>Your Notes:</h1>
        <NoteHolder>
          {this.state.notes.map(note => (
            <Note note={note} history={this.props.history} />
          ))}
        </NoteHolder>
      </>
    );
  }
}
const NoteHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export default MyNotes;
