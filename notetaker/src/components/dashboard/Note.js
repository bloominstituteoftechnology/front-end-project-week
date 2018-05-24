import React, { Component } from 'react';
import { Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './dashboard.css';
import { Route } from 'react-router-dom';
import NoteView from '../noteview/NoteView';
import './dashboard.css';

export default class Note extends Component {
  constructor(props) {
      super(props);
      this.state = {
          id: this.props.id,
          title: this.props.title,
          body: this.props.body
      };
  }

  render() {
    return (
        <Card className="rounded-0"> 
            <CardBody>
                <Link to={{
                    pathname:`/note/${this.state.id}`,
                    state: {
                        id: this.state.id,
                        title: this.state.title,
                        body: this.state.body
                    }
                 }} style={{ textDecoration: 'none', color: 'black' }}
                >
                    <CardTitle className="text-left card-title">
                    <h4 className="font-weight-bold">
                    {this.state.title}</h4>
                    </CardTitle>
                </Link>
                <CardText className="text-left">
                {this.state.body.substring(0, 150)}...
                </CardText>
            </CardBody>
        </Card>
    )
  }
}
