import React from 'react';
import './notelist.css';
import NoteCard from './notecard.js';
import { Row, Col } from 'reactstrap';

//The note list component shows as many notes as are in the notes array in
//rows of 3.
const NoteList = (props) => {

  //Nested loops are used to compose three reactstrap columns into each row
  let cardArr = [];
  for (let i = 0; i < props.notes.length; i = i + 3) {
    let subArr = [];
    for (let j = 0; j < 3 && i + j < props.notes.length; j++) {
      subArr.push(
        <Col className="my-column" xs="4" key={j}>
          <NoteCard viewMethod={props.viewMethod} note={props.notes[i+j]} />
        </Col>
      );
    }
    cardArr.push(
      <Row key={i}>
        {subArr}
      </Row>
    );
  }

  //The resulting component array is placed in a div
  return (
    <div className="notes-view">
      <div className="heading">
        <h5>Your Notes:</h5>
      </div>
      <div className="note-row">
        {cardArr}
      </div>
    </div>
  );
}

export default NoteList;
