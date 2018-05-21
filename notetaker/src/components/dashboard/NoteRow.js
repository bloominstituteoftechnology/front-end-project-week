import React, { Component } from 'react';
import { Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import './dashboard.css';

class NoteRow extends Component {
  render() {
    return (
        <div>
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
        </div>
    )
  }
}
export default NoteRow;