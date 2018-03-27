import React, { Component } from 'react';
import { connect } from 'react-redux';
import Note from './note'
import { Container, Row, Col, Card, CardBody, CardText, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';

function mapStateToProps(state) {
    return {
        notes: state.notes
    };
}

class NotesList extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col><h3>Your Notes:</h3></Col>
                </Row>
                <Row>
                    {this.props.notes.map(note=>{
                        return (
                            <Col>
                                <Link to={`/viewNotes/${note.id}`}>
                                    <Card>
                                        <CardBody>
                                            <CardTitle>
                                                {note.title}
                                            </CardTitle>
                                            <CardText>
                                                {note.note}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </Col>
                        )
                    })}
                </Row>

            </Container>
        )
    }
}

export default connect(mapStateToProps)(NotesList);