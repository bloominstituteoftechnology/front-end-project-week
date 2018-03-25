import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

class NoteCard extends Component {
  render() {
    return (
      <div>
        <Card body>
          <CardTitle>{this.props.title}</CardTitle>
          <CardText>{this.props.text}</CardText>
        </Card>
      </div>
    );
  }
}

export default NoteCard;