import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { 
  Container, 
  Row, 
  Col, 
  Card,
  CardBody,
  CardText,
  CardTitle
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


function mapStateToProps(state) {
  return {
    notes: state.notes
  };
}

class NotesList extends Component {
  render() {
    return (
      <Container className="my-5">
        <Row>
          <h2 className="section-head">Your Notes:</h2>
        </Row>
        <Row>
          {this.props.notes.map(notes => {
            return (
              <Col sm="4">
                <Link className="card-link" to={`/viewNotes/${notes.id}`}>
                  <Card className="note pb-2">
                    <CardBody>
                      <CardTitle>{notes.title}</CardTitle>
                      <hr />
                      <CardText>{notes.notes}</CardText>
                    </CardBody>
                  </Card>
                </Link>
            </Col>    
          );
        })}
      </Row>
    </Container>
  );
}
}

export default connect(mapStateToProps)(NotesList);