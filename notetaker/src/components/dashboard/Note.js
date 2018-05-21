import React, { Component } from 'react';
import { Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './dashboard.css';

export default class Note extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return ( 
        <div>
        <Card className="rounded-0"> 
            <CardBody>
                <CardTitle className="text-left card-title"><h4 className="font-weight-bold">Note Title</h4></CardTitle>
                <CardText className="text-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                                                Aenean massa. Cum sociis natoque penatibus et magnis dis.</CardText>
            </CardBody>
        </Card>
        </div>
    )
  }
}
