import React, { Component } from 'react';
import NoteCard from './NoteCard';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import './List.css';

class List extends Component {
    render() {
        return (
            <Container className="Content">
                <Row className="Content__heading">
                    <Col xs="10" className="Content__heading__col">
                        <h4>Your Notes:</h4>
                    </Col>
                </Row>
                <Row className="List__content">
                    {this.props.notes.map(note => {
                        return (
                        <Col className="List__card-Container" xs="4">
                            <NoteCard key={note.id} note={note}/>
                        </Col>
                        )
                    })}
                </Row>
            </Container>
        );
    }
}

 const mapStateToProps = state => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(List);