import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { 
  Row,
  Col,
  Container,
  Button
} from 'reactstrap';
import { deleteNote } from '../actions';

function mapStatetoProps(state) {
  return { notes: state.notes };
}

  class Notes extends Component {
     render () {
      const note = this.props.note.filter(
        note => note.id === parseInt(this.props.match.params.id, 10)
      )[0];
      return (
        <Container>
          <Row className="d-flex justify-content-end mt-3 mr-3">
            <Link className="header-link mr-2" to={`/editNote/${note.id}`}>
              Edit
            </Link>{" "}
          </Row>
          <Row className="mt-5">
            <h3 className="header w-100">{note.title}</h3>
            <p className="mt-4">{note.note}</p>
          </Row>
        </Container>
      );
    }
         
    componentDidMount() {}
  }

export default connect(mapStatetoProps, { deleteNote })(Notes);