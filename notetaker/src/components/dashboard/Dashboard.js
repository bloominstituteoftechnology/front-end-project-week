import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';
import './dashboard.css'

export default class Dashboard extends Component {
  render() {
    return (
        <div>
            <Container className="border container">
                <Row className="border">
                    <Col xs="3" className="sidebar">
                        <h1 className="mt-3 text-left font-weight-bold heading">Lambda Notes</h1>
                        <button type="button" class="mt-5 btn btn-lg btn-block rounded-0">View Your Notes</button>
                        <button type="button" class="mt-4 btn btn-lg btn-block rounded-0">+ Create New Note</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
  }
}
