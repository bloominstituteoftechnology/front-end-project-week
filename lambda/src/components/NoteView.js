import React, { Component } from "react";
import Note from "./Note";
import {notes} from "./Notes";
import styled from 'styled-components';


const NoteList = styled.div`
width: 1000px; 
height: 100%; 
background: #F0F0F0;
display: flex;
justify-content: center; 
align-items: center; 
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
          <Note note={this.props.notes} />
        </CardContent>
      </NoteList>
    );
  }
}
export default NoteView;