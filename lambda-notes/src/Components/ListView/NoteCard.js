import React from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';

class Note extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Card>
                    <CardTitle>{this.props.title}</CardTitle>
                    <CardBody>{this.props.body}</CardBody>
                </Card>
            </div>
        )
    }
}

export default Note;