import React from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';
import './styles.css';

class Note extends React.Component {
    render() {
        return (
            <div>
                <Card className="Card">
                    <CardTitle className="title">{this.props.title}</CardTitle>
                    <CardBody className="body">{this.props.body}</CardBody>
                </Card>
            </div>
        )
    }
}

export default Note;