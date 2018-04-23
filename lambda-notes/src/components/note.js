import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';

export default class Note extends Component {

  render() {
    return (
      <div className="note-container">
        <Card>
          <CardBody>
            <CardTitle><h4>{this.props.title}</h4></CardTitle>
            <hr />
            <CardText>{this.props.text}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

}
