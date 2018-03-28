import React, { Component } from 'react';
import NoteCard from './NoteCard';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import './List.css';
import { sortNewest, sortOldest } from '../actions';

class List extends Component {
    state = {
        notes: []
    }

    handleNewest() {
        this.props.sortNewest();
        this.props.history.push('/');
    }

    handleOldest() {
        this.props.sortOldest();
        this.props.history.push('/');
    }

    render() {
        return (
            <Container className="Content">
                <Row className="Content__heading">
                    <Col xs="4" className="Content__heading__col">
                        <h4>Your Notes:</h4>
                    </Col>
                    <Col xs="2">
                    <h4 className="Options__link">Sort by:</h4>
                    </Col>
                    <Col className="">
                        <h4 className="" onClick={() => this.handleNewest()}>newest</h4>
                    </Col>
                    <Col className="">
                        <h4 className="" onClick={() => this.handleOldest()}>oldest</h4>
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
        sortedNewest: state.sortedNewest,
    }
}


export default connect(mapStateToProps, { sortNewest, sortOldest })(List);