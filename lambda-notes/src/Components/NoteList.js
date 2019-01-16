import React from "react";
import Note from "./Note";
import axios from "axios";
import { NoteListContainer } from "../Styles/Styles";

class NoteList extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: []
    };
  }

  componentDidMount() {
    axios
      .get("https://fe-notes.herokuapp.com/note/get/all")
      .then(response => {
        this.setState({ notes: response.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h2>Your Notes:</h2>
        <NoteListContainer>
          {this.state.notes.length < 1 ? (
            <h3>There are no notes to load...</h3>
          ) : (
            this.state.notes.map(note => <Note key={note._id} note={note} />)
          )}
        </NoteListContainer>
      </div>
    );
  }
}
export default NoteList;
