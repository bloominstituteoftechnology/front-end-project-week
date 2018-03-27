import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

import { Container, Row, Col } from "reactstrap";
import "./ViewList.css";
import {Link, BrowserRouter as Router, 
    Route,} from 'react-router-dom';

class ViewList extends Component {
    constructor(){
        super();
        this.state={
            note:[],
        }
    }
  render() {
      
    return (
      <div className="NoteList">
        
      
        <Container className="Container">
        <Row>
        <span className= "RightSpan">Your Notes:</span>
        <Col sm="4">
          <Card className="Notes">
              <CardTitle>Note Title</CardTitle>
              <CardText>
                {" "}Morbi pellentesque euismod ventetatis. Nulla ut nibh nunc,
                Phasellus diam metus, blandic ac puris a, efficitr mollis{" "}
              </CardText>
          </Card>

          
        </Col>
    </Row>
          
        </Container>
        
      </div>
    );
  }
  

}
export default ViewList;
