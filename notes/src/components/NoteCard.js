import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

import './NoteCard.css';

class NoteCard extends Component {
    render() {
        return (
                <Card body className="NoteCard">
                    <Link to={`/notes/${this.props.note.id}`}>
                    <CardTitle className='NoteCard__title'>{this.props.note.title}</CardTitle>
                    </Link>
                    <CardText className='NoteCard__text'>{this.props.note.text}</CardText>
                </Card>
        );
    }
}

export default NoteCard;