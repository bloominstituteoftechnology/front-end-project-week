import React, { Component } from 'react';
import axios from 'axios';
import NoteCard from '../NoteCard/NoteCard';
import { StyledView, ListTitle, StyledListDiv, StyledNoteLink } from './styles';

export default class List extends Component {
  state = {
    notes: [],
  };
  componentDidMount() {
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then((res) => {
        this.setState(() => ({ notes: res.data }));
      })
      .catch((error) => {
        console.error('Server Error', error);
      });
  }
  render() {
    if(this.state.notes.length === 0) {
      return (
        <ListTitle>Loading your notes...</ListTitle>
      )
    }
    return (
      <StyledView>
        <ListTitle>Your Notes:</ListTitle>
        <StyledListDiv>
          {this.state.notes.map((note) => (
            <StyledNoteLink to={`/note/${note._id}`} key={note._id}>
              <NoteCard note={note} />
            </StyledNoteLink>
          ))}
        </StyledListDiv>
      </StyledView>
    );
  }
}
