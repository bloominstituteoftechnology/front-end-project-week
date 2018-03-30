import React, { Component } from 'react';
import NoteCard from './NoteCard';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import './List.css';
import { sortNewest, sortOldest, fetchNotes } from '../actions';

class List extends Component {
    handleNewest() {
        this.props.sortNewest();
        this.props.history.push('/');
    }

    handleOldest() {
        this.props.sortOldest();
        this.props.history.push('/');
    }

    componentDidMount() {
        this.props.fetchNotes();
    }

    render() {
        return (
            <Container className="Content">
                <Row className="Content__heading">
                    <Col xs="9" className="Content__heading__col">
                        <h4>Your Notes:</h4>
                    </Col>
                    <Col className="">
                        <h4 className="Options__link" onClick={() => this.handleNewest()}>newest</h4>
                    </Col>
                    <Col className="">
                        <h4 className="Options__link" onClick={() => this.handleOldest()}>oldest</h4>
                    </Col>
                </Row>
                <Row className="List__content">
                    {this.props.notes.map(note => {
                        return (
                        <Col key={note.id} className="List__card-Container" xs="4">
                            <NoteCard note={note}/>
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
        notes: state.notes,
        sortedNewest: state.sortedNewest,
    }
}


export default connect(mapStateToProps, { sortNewest, sortOldest, fetchNotes })(List);