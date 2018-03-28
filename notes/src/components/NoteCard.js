import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

import './NoteCard.css';

class NoteCard extends Component {
    render() {
        return (
                <Link to={`/notes/${this.props.note.id}`}>
                <Card body className="NoteCard">
                    <CardTitle className='NoteCard__title'>{this.props.note.title}</CardTitle>
                    <CardText className='NoteCard__text'>{this.props.note.text}</CardText>
                </Card>
                </Link>
        );
    }
}

export default NoteCard;