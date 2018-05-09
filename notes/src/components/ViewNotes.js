import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { withRouter } from 'react-router';

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
              <LinkContainer to={`/view/${index}/`} key={index}>
                <Col sm={4} md={4} xs={3}>
                  <h4>{note.title.slice(0, 17) + '...'}</h4>
                  <hr />
                  {note.content.slice(0, 99) + '...'}
                </Col>
              </LinkContainer>
          )
        })}
      </Row>
    )
  }
}

export default withRouter(ViewNotes);