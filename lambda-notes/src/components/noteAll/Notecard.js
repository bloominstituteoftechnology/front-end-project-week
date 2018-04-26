import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

class Notecard extends Component {
    render() {
        return (
            <div className='col-12 d-flex flex-row align-items-start mt-3 mb-3'>
            <Card>
                <CardBody>
                    <CardTitle className='border-bottom border-dar text-left font-weight-bold cardtitle'>Note Title</CardTitle>
                    <CardText className='text-left'>Content</CardText>
                </CardBody>
            </Card>
            </div>
        )
    }
}

export default Notecard;