import React, { Component } from 'react';
import { Card, CardHeader, CardFooter, CardBody,
    CardTitle, CardText, Container, Row, Col, Jumbotron, Button, Input, InputGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class EditNote extends Component {
  render() {
    return (
    <Container>
        <Row className="border">
            <Col xs="3" className="sidebar">
                <h1 className="mt-3 text-left heading">Lambda Notes</h1>
                <Link to="/">
                    <button type="button" class="mt-4 btn btn-lg btn-block rounded-0">View Your Notes</button>
                </Link>
                <Link to="/create">
                    <button type="button" class="mt-4 btn btn-lg btn-block rounded-0">+ Create New Note</button>
                </Link>
            </Col>
            <Col xs="9" className="main">
                <Row className="ml-3 mt-5 pt-4 mb-4">
                    <h4 className="text-left heading">Edit Note:</h4>
                </Row>
                <Row className="mb-4">
                    <Col xs="7" className="ml-3">
                        <Input placeholder="Note Title" className="note-title-input" />
                    </Col>
                </Row>
                <Row>
                    <Col xs="12" className="ml-3 pr-5">
                        <textarea placeholder="Note Content" className="rounded note-content-input"></textarea>
                    </Col>
                    <Col xs="4" className="ml-3">
                        <Link to="/">
                            <button type="button" class="mt-4 btn btn-lg btn-block rounded-0">Update</button>
                        </Link>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
    )
  }
}
