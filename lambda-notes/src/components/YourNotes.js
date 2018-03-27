import React, { Component } from "react";
import { Card, CardTitle, CardText, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class YourNotes extends Component {
  state = {
    notes: []
  };
  componentDidMount() {
    this.setState({ notes: this.props.notes });
  }

  render() {
    return (
      <Container>
        <h2 className="yourNotes">Your Notes:</h2>
        <div className="cardsList">
          {this.state.notes.map(note => {
            return (
              <div className="cardList" key={note.id}>
                <Link
                  to={{
                    pathname: `/notes/${note.id}}`,
                    state: { currentNote: note }
                  }}
                >
                  <Row>
                    <Card body>
                      <CardTitle>{note.title}</CardTitle>
                      <CardText>{note.text}</CardText>
                    </Card>
                  </Row>
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    );
  }
}

export default YourNotes;
