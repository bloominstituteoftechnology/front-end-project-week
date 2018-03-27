import React, { Component } from 'react';
import NoteCard from './NoteCard';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class List extends Component {
    render() {
        return (
            <Container className="List">
                <Row className="List__header">
                    <Col>
                    <h4 >You're ntoes:</h4>
                    </Col>
                </Row>
                <Row className="List__Content">
                    {this.props.notes.map(note => {
                        return <NoteCard key={note.id} note={note}/>
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