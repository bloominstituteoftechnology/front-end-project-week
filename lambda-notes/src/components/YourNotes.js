import React, { Component } from "react";
import { Card, CardTitle, CardText, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class YourNotes extends Component {
  render() {
    return (
      <Container>
        <h2 className="yourNotes">Your Notes:</h2>
        <div className="cardsList">
          {this.props.notes.map(note => {
            return (
              <div className="cardList" key={note.id} note={note}>
                <Link to={`/notes/${note.id}}`}>
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
const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps)(YourNotes);
