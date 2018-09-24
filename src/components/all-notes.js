import React, { Component } from 'react';
import styled from 'styled-components';
import NotePreview from './note-preview.js';

const AllNotesDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: #F3F3F3;
  .sort {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin: 5px 0 0 15px;
    button {
      height: 25px;
      margin: 0 10px;
    }
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
    console.log(this.props)
    this.state = {
      stateNotes: false,
      notes: [],
    }
  }



  render(props) {

    //converts tag string to tags array 
    this.props.notes.forEach(note => {
      if(note.tags){
        console.log(note.tags)
        const tagsArr = note.tags.split(',')
        console.log(tagsArr)
        note.tags = tagsArr
      }
    })
    
    return (
      <AllNotesDiv>
        <h3>Your Notes:</h3>
        <div className="sort">
          <h4>Sort by:</h4>
            <button onClick={this.props.sortByLetter}>A->Z</button>
            <button onClick={this.props.sortById}>Id</button>
        </div>

        <div className="all-notes">
          {this.props.notes.map((note, index) => {
            // let url = decodeURI(note.title)
            // would be cool to use title instead
            //how to do that?
            //------------------------------??----------------------
            return (
              <NotePreview
                onDrop={this.props.onDrop}
                key={index}
                index={index}
                note={note}
              />)
          })}
        </div>
      </AllNotesDiv>
    );
  }
}
