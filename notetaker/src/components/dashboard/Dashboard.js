import React, { Component } from 'react';
import { Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import './dashboard.css';
import { Link } from 'react-router-dom';
import Note from './Note'

export default class Dashboard extends Component {
    
  constructor(props){
      super(props);
  }



  render() {
    return (
        <div>
            <Container className="container">
                <Row className="border">
                    <Col xs="3" className="sidebar">
                        <h1 className="mt-3 text-left heading">Lambda Notes</h1>
                        <button type="button" class="mt-4 btn btn-lg btn-block rounded-0">View Your Notes</button>
                        <Link to="/create">
                            <button type="button" class="mt-4 btn btn-lg btn-block rounded-0">+ Create New Note</button>
                        </Link>
                    </Col>
                    <Col xs="9" className="main">
                        <Row className="ml-2 mt-5 pt-4 mb-4">
                            <h4 className="text-left heading">Your Notes:</h4>
                        </Row>
                        <Row className="mb-4">
                            <Col xs="4">
                               <Note />
                            </Col>
                            <Col xs="4">
                                <Note />
                            </Col>
                            <Col xs="4">
                                <Note />
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col xs="4">
                                <Note />
                            </Col>
                            <Col xs="4">
                                <Note />
                            </Col>
                            <Col xs="4">
                                <Note />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="4">
                                <Note />
                            </Col>
                            <Col xs="4">
                                <Note />
                            </Col>
                            <Col xs="4">
                                <Note />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
  }
}
