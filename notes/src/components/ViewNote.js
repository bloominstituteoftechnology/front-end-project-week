import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { withRouter } from 'react-router';

class ViewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    console.log(this.props.match);
    console.log(this.props.notes);
    return (
      <Row>
        <Col>
          <h3>{this.props.notes[this.props.match.params.id].title}</h3>
          {this.props.notes[this.props.match.params.id].content.
            replace(/\r?\n/g, '<br>').replace(/<br>+/g, '<br>').
              split('<br>').map((para, index) => {
                return (
                  <p key={index}>{para}</p>
                )
            })}
        </Col>
      </Row>
    )
  }
}

export default withRouter(ViewNote);