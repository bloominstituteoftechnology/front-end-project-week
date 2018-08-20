import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Container, Col } from 'reactstrap';

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
                <Input type="text" name="title" placeholder="Note Title" />
                <Input type="textarea" name="content" placeholder="Note Content" rows="15" />
                <Button>Submit</Button>
            </Form>
        </Container>
    );
}

export default NewNote;
