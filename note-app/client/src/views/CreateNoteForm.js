import React from 'react';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';
import { BrowserRouter as Router} from "react-router-dom";



const CreateNote = (props) => {
    return (
    <div>
        <Form>
        <FormGroup row>
            <Label for="newNoteTitle" sm={2}>New Note Title</Label>
            <Col sm={10}>
            <Input type="Text" name="stickyTitle" id="newNoteTitle" placeholder="What do you want to call this?"  bsSize="lg"/>
            </Col>
        </FormGroup>
        <br />
        <FormGroup row>
            <Label for="newNoteContent" sm={8}>New Note Content</Label>
            <Col sm={10}>
            <Input type="textarea" name="sticky" id="newNoteContent" placeholder="What do you want to write?"/>
            </Col>
        </FormGroup>
        <br />
        <FormGroup>
            <Label for="newNoteCardColor">New Note Color</Label>
            <Input type="color" name="color" id="newNoteColor" placeholder="color placeholder" />
        </FormGroup>
        </Form>
    </div>
    );
};

export default CreateNote;