import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import './NoteCard.css';

class NoteCard extends Component {
    render() {
        return (
            <Col xs="3" className="NoteCard">
                <Link to={`/notes/${this.props.note.id}`}>
                <h4 className="NoteCard__heading">{this.props.note.heading}</h4>
                <p className="NoteCard__text">{this.props.note.text}</p>
                </Link>
            </Col>
        );
    }
}

export default NoteCard;