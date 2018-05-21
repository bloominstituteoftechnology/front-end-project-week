import React, { Component } from 'react';
import { Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import './dashboard.css';

export default class Dashboard extends Component {
  render() {
    return (
        <div>
            <Container className="container">
                <Row className="border">
                    <Col xs="3" className="sidebar">
                        <h1 className="mt-3 text-left heading">Lambda Notes</h1>
                        <button type="button" class="mt-4 btn btn-lg btn-block rounded-0">View Your Notes</button>
                        <button type="button" class="mt-4 btn btn-lg btn-block rounded-0">+ Create New Note</button>
                    </Col>
                    <Col xs="9" className="main">
                        <Row className="ml-2 mt-5 pt-4 mb-4">
                            <h4 className="text-left heading">Your Notes:</h4>
                        </Row>
                        <Row className="mb-4">
                            <Col xs="4">
                                <Card className="rounded-0"> 
                                    <CardBody>
                                        <CardTitle className="text-left card-title"><h4 className="font-weight-bold">Note Title</h4></CardTitle>
                                        <CardText className="text-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                                                                        Aenean massa. Cum sociis natoque penatibus et magnis dis.</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs="4">
                                <Card className="rounded-0"> 
                                    <CardBody>
                                        <CardTitle className="text-left card-title"><h4 className="font-weight-bold">Note Title</h4></CardTitle>
                                        <CardText className="text-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                                                                        Aenean massa. Cum sociis natoque penatibus et magnis dis.</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs="4">
                                <Card className="rounded-0"> 
                                    <CardBody>
                                        <CardTitle className="text-left card-title"><h4 className="font-weight-bold">Note Title</h4></CardTitle>
                                        <CardText className="text-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                                                                        Aenean massa. Cum sociis natoque penatibus et magnis dis.</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col xs="4">
                                <Card className="rounded-0"> 
                                    <CardBody>
                                        <CardTitle className="text-left card-title"><h4 className="font-weight-bold">Note Title</h4></CardTitle>
                                        <CardText className="text-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                                                                        Aenean massa. Cum sociis natoque penatibus et magnis dis.</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs="4">
                                <Card className="rounded-0"> 
                                    <CardBody>
                                        <CardTitle className="text-left card-title"><h4 className="font-weight-bold">Note Title</h4></CardTitle>
                                        <CardText className="text-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                                                                        Aenean massa. Cum sociis natoque penatibus et magnis dis.</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs="4">
                                <Card className="rounded-0"> 
                                    <CardBody>
                                        <CardTitle className="text-left card-title"><h4 className="font-weight-bold">Note Title</h4></CardTitle>
                                        <CardText className="text-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                                                                        Aenean massa. Cum sociis natoque penatibus et magnis dis.</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="4">
                                <Card className="rounded-0"> 
                                    <CardBody>
                                        <CardTitle className="text-left card-title"><h4 className="font-weight-bold">Note Title</h4></CardTitle>
                                        <CardText className="text-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                                                                        Aenean massa. Cum sociis natoque penatibus et magnis dis.</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs="4">
                                <Card className="rounded-0"> 
                                    <CardBody>
                                        <CardTitle className="text-left card-title"><h4 className="font-weight-bold">Note Title</h4></CardTitle>
                                        <CardText className="text-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                                                                        Aenean massa. Cum sociis natoque penatibus et magnis dis.</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs="4">
                                <Card className="rounded-0"> 
                                    <CardBody>
                                        <CardTitle className="text-left card-title"><h4 className="font-weight-bold">Note Title</h4></CardTitle>
                                        <CardText className="text-left">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
                                                                        Aenean massa. Cum sociis natoque penatibus et magnis dis.</CardText>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
  }
}
