import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import NotePreview from './note-preview.js';

const AllNotesDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  h4 {
    border: 1px solid green;
  }
  .all-notes {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    .note-link{
      text-decoration: none;
    }

  }
`;

export default class AllNotes extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [],
    }
  }

  render() {
    return (
      <AllNotesDiv>
        <h3>Your Notes:</h3>
        {
        }
        <div className="all-notes">
          {this.props.notes.map((note, index) => {
            // let url = decodeURI(note.title)
            // would be cool to use title instead
            //how to do that?
            //------------------------------??----------------------
            return (
              <NotePreview
                index={index}
                note={note}
              />)
          })}
        </div>
      </AllNotesDiv>
    );
  }
}
