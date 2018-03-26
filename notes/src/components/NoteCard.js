import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './NoteCard.css';

class NoteCard extends Component {
    render() {
        return (
            <Col xs="3" className="NoteCard">
                <h4 className="NoteCard__heading">{this.props.note.heading}</h4>
                <p className="NoteCard__text">{this.props.note.text}</p>
            </Col>
        );
    }
}

export default NoteCard;