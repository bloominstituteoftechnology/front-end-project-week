import React, { Component } from 'react';
import { Container, Row, Col, Button, Nav, NavItem, NavLink } from 'reactstrap';
import Notes from './Notes';
import { notDeepStrictEqual } from 'assert';

class NotesArea extends Component {
  constructor() {
    super();
    this.state = {
      notes: [
        {
          id: 1,
          title: "Note Title 1",
          body: 
          "This is not the hill i want to die on viral engagement, or shelfware, or run it up the flagpole, ping the boss and circle back we're ahead of the curve on that one."
        },
        {
          id: 2,
          title: "Note Title 2",
          body: 
          "This is not the hill i want to die on viral engagement, or shelfware, or run it up the flagpole, ping the boss and circle back we're ahead of the curve on that one."
        },
        {
          id: 3,
          title: "Note Title 3",
          body: 
          "This is not the hill i want to die on viral engagement, or shelfware, or run it up the flagpole, ping the boss and circle back we're ahead of the curve on that one."
        },
        {
          id: 4,
          title: "Note Title 4",
          body: 
          "This is not the hill i want to die on viral engagement, or shelfware, or run it up the flagpole, ping the boss and circle back we're ahead of the curve on that one."
        },
        {
          id: 5,
          title: "Note Title 5",
          body: 
          "This is not the hill i want to die on viral engagement, or shelfware, or run it up the flagpole, ping the boss and circle back we're ahead of the curve on that one."
        },
        {
          id: 6,
          title: "Note Title 6",
          body: 
          "This is not the hill i want to die on viral engagement, or shelfware, or run it up the flagpole, ping the boss and circle back we're ahead of the curve on that one."
        },
        {
          id: 7,
          title: "Note Title 7",
          body: 
          "This is not the hill i want to die on viral engagement, or shelfware, or run it up the flagpole, ping the boss and circle back we're ahead of the curve on that one."
        },
        {
          id: 8,
          title: "Note Title 8",
          body: 
          "This is not the hill i want to die on viral engagement, or shelfware, or run it up the flagpole, ping the boss and circle back we're ahead of the curve on that one."
        },
        {
          id: 9,
          title: "Note Title 9",
          body: 
          "This is not the hill i want to die on viral engagement, or shelfware, or run it up the flagpole, ping the boss and circle back we're ahead of the curve on that one."
        }
      ]
    }
  }



render() {
  let notes = this.state.notes.map(notes => {
    return (
        <Col sm="4">
          <Notes key={notes.id} notes={notes} />
        </Col>
    )
  })
  return (
    <Container >
      <Row>
       {notes}
      </Row>
    </Container>
  )
}
}

export default NotesArea;