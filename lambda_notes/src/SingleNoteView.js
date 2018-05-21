import React, { Component } from 'react';
import { Card, CardText, CardSubtitle, CardBody,
  CardTitle, Button } from 'reactstrap';
  import { Container, Row, Col } from 'reactstrap';
  import { Link } from 'react-router-dom';
  import SideNav from'./SideNav';


export default class SingleNoteView extends Component {

    state = {
        note: {},
       noteTitle: '',
       noteContent: '',   
    };


    componentDidMount() {
        this.setState({note: SingleNoteView });
    };

    render () {
        return (
          <Row>
              <SideNav Col md="4" />
          <Col md="8">
            <Card body>
              <CardTitle>Note Title</CardTitle>
              <CardText>Note Content</CardText>
              <Button>Button</Button>
              </Card>
          </Col>
        </Row>
      )
      }
}
