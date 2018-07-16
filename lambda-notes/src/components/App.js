import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import VerticalNav from "./VerticalNav/VerticalNav";
import ListView from "./ListView/ListView";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 1,
          title: "Note Title1",
          content: "Lorem ipsum1"
        },
        {
          id: 2,
          title: "Note Title2",
          content: "Lorem ipsum2"
        }
      ],
      note: ""
    };
  }
  addNote = event => {
    event.preventDefault();
  };
  render() {
    return (
      <Container>
        <Row>
          <VerticalNav />
          <Col xs="9">
            <ListView notes={this.state.notes} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
