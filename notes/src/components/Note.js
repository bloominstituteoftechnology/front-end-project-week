import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

class Note extends Component {
  render() {
    return (
      <div>
        <Card>
            <CardBody>
                <CardTitle>{this.props.title}</CardTitle>
                <CardText>{this.props.content}</CardText>
            </CardBody>
        </Card>
      </div>
    )
  }
}

export default Note;