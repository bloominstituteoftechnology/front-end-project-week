import React, { Component } from "react";
import Note from "./Note";
import {notes} from "./Notes";
import styled from 'styled-components';


const NoteList = styled.div`
`
const CardContent = styled.div`
`

class NoteView extends Component {
  constructor() {
    super();
    this.state = {
      notes: notes
    };
  }
  render() {
    return (
      <NoteList>
        <CardContent>
          <Note note={this.state.notes} />
        </CardContent>
      </NoteList>
    );
  }
}
export default NoteView;