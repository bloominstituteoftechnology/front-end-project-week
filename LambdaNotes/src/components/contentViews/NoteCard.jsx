import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

class NoteCard extends Component {
  render() {
    return (
      <div>
        <Link to={`/view/${this.props.id}`} style={{ color: 'black' }}>
          <Card body>
            <CardTitle>{this.props.title}</CardTitle>
            <CardText>{this.props.text}</CardText>
          </Card>
        </Link>
      </div>
    );
  }
}

export default NoteCard;