import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardText, Row, Container, Col, Input } from 'reactstrap';

import './Notes.css';

const searchingFor = term => {
    return function (x) {
      return x.content.toLowerCase().includes(term.toLowerCase()) || !term;
    }
  }


const Notes = props => {
    return (
        <Container className="notes">
            <Row>
                <Col>
                    <h2>Your Notes:</h2>
                </Col>
                <Col>
                    <Input onChange={props.searchHandler} type="text" name="search" placeholder="Search Notes" style={{ border: "2px solid lightgray" }} value={props.term} />
                </Col>
            </Row>
            <Row >
                {props.notes.filter(searchingFor(props.term)).map(note => (
                    <Col style={{ paddingTop: 30 + 'px', paddingBottom: 30 + 'px' }} key={note.id} xs="12" sm="4">
                        <Link to={`/notes/${note.id}`}>
                            <Card style={{ height: 200 + 'px' }}>
                                <CardBody>
                                    <CardTitle className="text-truncate" style={{ borderBottom: "2px solid lightgray" }}>{note.title}</CardTitle>
                                    <CardText className="block-with-text">{note.content}</CardText>
                                </CardBody>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </Container> 
    );
}

export default Notes;