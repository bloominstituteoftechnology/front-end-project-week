import React from 'react';
import { Card, CardTitle, CardBody } from 'reactstrap';
import './styles.css';

class Note extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Card className="card">
                    <CardTitle>{this.props.title}</CardTitle>
                    <CardBody>{this.props.body}</CardBody>
                </Card>
            </div>
        )
    }
}

export default Note;