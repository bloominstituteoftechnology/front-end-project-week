import React, { Component } from 'react';
import NoteCard from './NoteCard';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

class List extends Component {
    render() {
        return (
            <Container>
                <Row>
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