//IMPORTS
import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

class NoteCard extends Component {
    render() {
        return (
            <div className='col-12 d-flex flex-row align-items-start mt-3 mb-3'>
            {/* //implement onClick in order to edit/update cards  */}
            <Card>
                <CardBody>
                    <CardTitle className='border-bottom border-dark text-left font-weight-bold cardtitle'>{this.props.title}</CardTitle>
                    <CardText className='text-left'>{this.props.content}</CardText>
                </CardBody>
            </Card>
            </div>
        )
    }
}

export default NoteCard;