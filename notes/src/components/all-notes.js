import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const AllNotesDiv = styled.div`
  display: flex;
  flex-direction: column;
  .all-notes {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    .note-preview {
      border: 1px solid yellow;
      width: 150px;
      height: 150px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      margin: 10px;
      h3{
        margin: 10px;
      }
      p {
        margin: 0;
        padding: 10px;
      }
    }
  }
`;

export default class AllNotes extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: this.props.notes,
    }
  }

  render() {
    return (
      <AllNotesDiv>
        <h4>Your Notes</h4>

        <div className="all-notes">
          {this.state.notes.map(note => {
            // let url = decodeURI(note.title)
            // would be cool to use title instead
            //how to do that?
            //------------------------------??----------------------
            return (
              <Link key={note.id} to={`/all-notes/${note.id}`}>
                <div className="note-preview">
                  <h3>{note.title}</h3>
                  <p>{note.body}</p>
                </div>
              </Link>
            )
          })}
        </div>
      </AllNotesDiv>
    );
  }
}
