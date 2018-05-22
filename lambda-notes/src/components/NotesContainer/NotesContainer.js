import React, { Component } from 'react';
import './NotesContainer.css';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

class NotesContainer extends Component {

    render() {
        return (
            <div className="notescontainer">
                <h4>Your Notes:</h4>
                <div className="notes">
                    {this.props.cards.map((item, index) => {
                        return (
                            <Card key={index + item.title + item.text}>
                                <CardBody>
                                    <CardTitle>{item.title}</CardTitle>
                                    <CardText>{item.text}</CardText>
                                </CardBody>
                            </Card>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default NotesContainer; 