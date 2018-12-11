import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from 'axios';





class GetNViewNotes extends Component {
  constructor () {
    super ();
    this.state = {
      notes: [],
    };
  }

  componentDidMount () {
    axios
      .get ('https://fe-notes.herokuapp.com/note/get/all')
      .then (res => {
        this.setState ({notes: res.data});
      })
      .catch (err => console.log (err, 'failed to get api'));
  }

  render () {
    return (
      <ViewListBox>
        <ViewNotesBox>
          <NotesListHeader>Your Notes:</NotesListHeader>

          <AllNotesBox>
            {this.state.notes.map (eachNote => {
              return (
                <NoteCardLink to={`/note/${eachNote._id}`} key={eachNote._id}>
                  <EachNoteCard>
                    <EachNoteTitle>{eachNote.title}</EachNoteTitle>
                    <EachNoteText>{eachNote.textBody}</EachNoteText>
    
              );
            })}
          </AllNotesBox>
        </ViewNotesBox>
      </ViewListBox>
    );
  }
}

export default GetNViewNotes;
