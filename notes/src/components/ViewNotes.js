import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class ViewNotes extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <Row>
        { this.props.notes.map((note, index) => {
          return (
            <Col key={index} sm={4} md={4} xs={3}>
              <h4>{note.title}</h4>
              <hr />
              {note.content.slice(0, 99) + '...'}
            </Col>
          )
        })}
      </Row>
    )
  }
}

export default ViewNotes;