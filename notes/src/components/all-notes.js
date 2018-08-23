import React, { Component } from 'react';
import styled from 'styled-components';
import NotePreview from './note-preview.js';

const AllNotesDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
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



  sortByLetter = (e) => {
    console.log(e)
    console.log(this.props.notes)
    console.log('sortByLetter')
  }

  sortByIndex = () => {
    console.log('sortByIndex')
  }

  mountToState(notes){
    this.setState({
      stateNotes: true,
      notes: notes,
    })
  }

  render(props) {
    console.log(this.props.notes)
    {this.state.stateNotes ?  null : this.mountToState(this.props.notes)}
    console.log(this.state.notes)


    return (
      <AllNotesDiv>
        <h3>Your Notes:</h3>
        <div className="sort">
          <h4>Sort by:</h4>
            <button onClick={this.sortByLetter}>A->Z</button>
            <button onClick={this.sortByIndex}>Index</button>
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
