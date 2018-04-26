import React, { Component } from 'react';
import { Container, Row, Col, Button, Nav, NavItem, NavLink } from 'reactstrap';
import Notes from './Notes';
import { notDeepStrictEqual } from 'assert';

class NotesList extends Component {
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
          "Hit the ground running race without a finish line forcing function design thinking. Punter pushback, nor value-added it's a simple lift and shift job going forward let's unpack that later."
        },
        {
          id: 3,
          title: "Note Title 3",
          body: 
          "Ladder up / ladder back to the strategy no scraps hit the floor to be inspired is to become creative, innovative and energized we want this philosophy to trickle down to all our stakeholders."
        },
        {
          id: 4,
          title: "Note Title 4",
          body: 
          "Data-point blue sky thinking, so high touch client and on-brand but completeley fresh. Productize old boys club going forward or best practices bottleneck mice but beef up."
        },
        {
          id: 5,
          title: "Note Title 5",
          body: 
          "I don't want to drain the whole swamp, i just want to shoot some alligators close the loop run it up the flagpole. Root-and-branch review action item ramp up."
        },
        {
          id: 6,
          title: "Note Title 6",
          body: 
          "Future-proof level the playing field, for ultimate measure of success, or this is meaningless yet it's a simple lift and shift job."
        },
        {
          id: 7,
          title: "Note Title 7",
          body: 
          "Core competencies. Please use solutionize instead of solution ideas! :) can you ballpark the cost per unit for me, or drill down personal development, gain traction yet quarterly sales are at an all-time low, yet strategic high-level 30,000 ft view."
        },
        {
          id: 8,
          title: "Note Title 8",
          body: 
          "After I ran into Helen at a restaurant, I realized she was just office pretty cannibalize, nor curate, so take five, punch the tree."
        },
        {
          id: 9,
          title: "Note Title 9",
          body: 
          "Clear blue water we need to leverage our synergies we need a recap by eod, cob or whatever comes first staff engagement, nor we need to harvest synergy effects or touch base. "
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