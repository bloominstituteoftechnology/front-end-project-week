import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';


class ListView extends Component {
    viewNote = (id) => {
        this.props.viewNote(id);
    }

    render() {
        return (
            <Row>
                <h2>Your Notes:</h2>
                { this.props.notes.map(note => {
                    return (
                        <Col md={4} sm={4} xs={6} onClick={() => this.viewNote(note.id)}>
                            <h3>{note.title}</h3>
                            <p>{note.content}</p>
                        </Col>
                    )
                })}
            </Row>
        )
    }
}

export default ListView;