//IMPORTS
import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

class NoteCard extends Component {
    render() {
        return (
            <div className='col-4 d-flex flex-row align-items-start mt-3 mb-3'>
            <Card>
                <CardBody>
                    <CardTitle className='border-bottom border-dark text-left cardtitle'>Note Title</CardTitle>
                    <CardText className='text-left'>"Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus, blandit ac purus a, efficitur mollis …"</CardText>
                </CardBody>
            </Card>
            </div>
        )
    }
}

export default NoteCard;