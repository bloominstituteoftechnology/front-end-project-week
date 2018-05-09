import React from 'react';
import { Row, Col } from 'react-bootstrap';


export const ViewNote = () => {
        return (
            <Row>
                <h2>{this.props.note.title}</h2>
                <Col>{this.props.note.content}</Col>
            </Row>
        )
    }


