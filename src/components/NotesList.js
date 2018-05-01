import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Col,
  Row,
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardFooter
} from "reactstrap";
import { Link } from "react-router-dom";
import { getNotes } from "../actions/index";

function mapStateToProps(state) {
  return {
    notes: state.notes
  };
}

class NotesList extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.getNotes();
    }, 100);
  }
  render() {
    console.log("Notes List: ", this.props.notes);
    return (
      <Container className="my-5">
        <Row>
          <h3 className="header">Your Notes:</h3>
        </Row>
        <Row>
          {this.props.notes.map(note => {
            return (
              <Col sm={12} md={6} lg={4}>
                <Link className="card-link" to={`/viewNotes/${note._id}`}>
                  <Card className="note my-3">
                    <CardBody>
                      <CardTitle>{note.title}</CardTitle>
                      <hr />
                      <CardText>{note.note}</CardText>
                    </CardBody>
                    {/* <CardFooter className=" p-0">
                      {note.tags.map(tag => (
                        <span className="badge badge-warning m-1 text-white">
                          {tag}
                        </span>
                      ))}
                    </CardFooter> */}
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

export default connect(mapStateToProps, { getNotes })(NotesList);
