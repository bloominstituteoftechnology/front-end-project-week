import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle, CardColumns } from 'reactstrap';

class Note extends Component {
    render() {
        return (
            <Card>
                <CardBody>
                    <CardTitle>{this.props.title}</CardTitle>
                    <CardText>{this.props.content}</CardText>
                </CardBody>
            </Card>
        )
    }
}

export default Note;