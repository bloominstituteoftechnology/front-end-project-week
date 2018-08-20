import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

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
    .note-preview {
      border: 1px solid lightgray;
      background: white;
      width: 200px;
      height: 200px;
      margin-bottom: 15px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: black;
      h3{
        ${'' /* border: 1px solid blue; */}
        margin: 10px 10px 5px 10px;
        width: 80%;
        text-decoration: none;
        border-bottom: 1px solid black;
      }
      p {
        ${'' /* border: 1px solid blue; */}
        width: 80%;
        height: 70%;
        overflow: hidden;
        text-decoration: none;
        margin: 0;
        line-height: 23px;
        font-size: 14px;
        font: roboto;
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
        <h3>Your Notes:</h3>

        <div className="all-notes">
          {this.state.notes.map(note => {
            // let url = decodeURI(note.title)
            // would be cool to use title instead
            //how to do that?
            //------------------------------??----------------------
            return (
              <Link className="note-link" key={note.id} to={`/all-notes/${note.id}`}>
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
