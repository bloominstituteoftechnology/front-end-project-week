import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

class Note extends Component {
    render() {
        return (
            <div className="notes">
                <Row>
                    <Col sm="4">
                        <Card body>
                        <CardTitle>CardTitle</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>   
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card body>
                        <CardTitle>CardTitle</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>   
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card body>
                        <CardTitle>cardTitle</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Note;