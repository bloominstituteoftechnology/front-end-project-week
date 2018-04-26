import React, { Component } from 'react';
import { Container, Row, Col, Button, Nav, NavItem, NavLink } from 'reactstrap';
import Notes from './Notes';
import { notDeepStrictEqual } from 'assert';

class NotesList extends Component {
  constructor() {
    super();
    this.state = {
      
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
    <Col sm="4">
      <Row>
        <Button />
      </Row>
    </Col>
      <Row>
       {notes}
      </Row>
    </Container>
  )
}
}

export default NotesList;