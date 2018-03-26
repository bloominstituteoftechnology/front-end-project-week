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
import "./NoteList.css";

class NoteList extends Component {
  render() {
    return (
      <div className="NoteList">
        
       <Container className="Left_Container">
       <span className="LeftSpan">Lambda Notes</span>
       <Row>
           <Col sm="3"><Button className="LeftBtn" color="info">View Your Notes</Button>{" "}</Col>
           <Col sm ="3"><Button className="LeftBtn" color="info">+Create New Note</Button> {" "}</Col>
            
            
       </Row>
       </Container>

        <Container className="Right_Container">
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

          <Card className="Notes">
              <CardTitle>Note Title</CardTitle>
              <CardText>
                {" "}Morbi pellentesque euismod ventetatis. Nulla ut nibh nunc,
                Phasellus diam metus, blandic ac puris a, efficitr mollis{" "}
              </CardText>
          </Card>

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
export default NoteList;
