import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'



export default class noteListView extends React.Component {
    render() {
      return (
        <Container fluid>
          <Row>
            <Col lg="3">Lambda Notes</Col>

            <Col lg="9">Your Notes</Col>
          </Row>  
          
          
        </Container>
      );
    }
  }