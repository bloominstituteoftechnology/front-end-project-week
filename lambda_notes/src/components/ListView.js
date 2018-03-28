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
import { Container, Col } from "reactstrap";
import "./ListView.css";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";

class ListView extends Component {
  constructor() {
    super();
    this.state = {
      note: [],
    };
  }
  render() {
    return (
      <div className="NoteList">
        <Container className="Container">
          <h1 className="NoteSpan">Your Notes:</h1>

          <Card className="Notes">
          <Link to="/ListView"><CardTitle>Note Title</CardTitle> </Link>   
            <CardBody>
              <hr />
              Morbi pellentesque euismod ventetatis. Nulla ut nibh nunc,
              Phasellus diam metus, blandic ac puris a, efficitr mollisMorbi
              pellentesque euismod ventetatis. Nulla ut nibh nunc, Phasellus
              diam metus,
            </CardBody>
          </Card>

        </Container>
      </div>
    );
  }
}
export default ListView;
