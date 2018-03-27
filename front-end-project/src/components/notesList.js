import React, { Component } from 'react';
import { connect } from 'react-redux';
import Note from './note';
import { Container, Row, Col, Card, CardBody, CardText, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom';
import './index.css';

function mapStateToProps(state) {
    return {
        notes: state.notes
    };
}

class NotesList extends Component {
    render() {
        return (
            <Container className='my-5'>
                <Row>
                    <Col><h3 className='header'>Your Notes:</h3></Col>
                </Row>
                <Row>
                    {this.props.notes.map(note=>{
                        return (
                            <Col sm={4}>
                                <Link className='card-link' to={`/viewNotes/${note.id}`}>
                                    <Card className='note pb-3'>
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