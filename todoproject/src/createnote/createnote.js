import React, { Component } from 'react';
import './index.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CreateNote extends Component {
    render() {
        return (
          
            <div className="container2">    
            <h6>Create New Note:</h6>

            <Form className="Form1">
                <FormGroup>
                <Input type="noteTitle" name="noteTitle" id="note-title" placeholder="Note Title" />
                </FormGroup>
                <FormGroup>
                <Input type="noteContent" name="noteContent" id="note-content" placeholder="Note Content" />
                </FormGroup>
                <button className="button3">Save</button>
            </Form>
        
            </div>
        )
    }
};

export default CreateNote;