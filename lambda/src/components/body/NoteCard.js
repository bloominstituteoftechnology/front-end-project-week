import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

class NoteCard extends Component {
    render() {
        return (
            <div className='col-4 d-flex flex-row align-items-start mt-3 mb-3'>
                <Card>
                    <CardBody>
                        <CardTitle className='border-bottom border-dark text-left'>Note Title</CardTitle>
                        <CardText className='text-left'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</CardText>
                    </CardBody>
                </Card>
            </div>
        )
}
}

export default NoteCard;