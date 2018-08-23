import React from 'react';
import { Button, Form, Input, Row, Container, Col } from 'reactstrap';

import './NewNote.css';

const NewNote = props => {
    return (
        <Container className="new-note">
            <Row>
                <Col>
                    <h2>Create New Note:</h2>
                </Col>
            </Row>
            <Form>
                <Row>
                    <Col sm="7">
                        <Input onChange={props.handleInputChange} type="text" name="title" placeholder="Note Title" style={{ marginTop: 30 + 'px', border: "2px solid lightgray" }} value={props.title} />
                    </Col>
                </Row>
                <Input onChange={props.handleInputChange} type="textarea" name="content" placeholder="Note Content" rows="15" style={{ marginTop: 15 + 'px' , border: "2px solid lightgray"}} value={props.content} />
                <Row>
                    <Col sm="4">
                        <Button onClick={props.addNote} onMouseUp={() => props.history.goBack()} color="info" style={{ marginTop: 15 + 'px' }} block>Save</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}



export default NewNote;
