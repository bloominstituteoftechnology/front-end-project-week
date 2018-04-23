import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';

export default class Note extends Component {
  constructor() {
    super();
    this.state = {
      title: "Card title",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content."
    };
  }

  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle><h4>{this.state.title}</h4></CardTitle>
          <hr />
          <CardText>{this.state.text}</CardText>
        </CardBody>
      </Card>
    );
  }

}
