import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './NotesList.css';

function NotesList({ notes }) {

  return (
    <Container>
      <Row>
        <h3>Your Notes:</h3>
      </Row>
      <Row>
        {notes.map((note) => {
          return <Col key={note.title + note.id} className='pl-2 pr-2 pt-3 pb-3' xs='4'>
            <Link className='card' to={`/note/${note.id}`}>
              <Card outline className='notes'>
                <CardBody>
                  <CardTitle className='title'>{note.title}</CardTitle>
                  <CardText className='content'>{note.content}</CardText>
                </CardBody>
              </Card>
            </Link>
          </Col>;
        })}
      </Row>
    </Container>
  );
}

const mapStateToProps = state => {
  return state;
};

export default withRouter(connect(mapStateToProps, {})(NotesList));
