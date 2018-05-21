import React, { Component } from 'react';
import './index.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class CreateNote extends Component {
    render() {
        return (
            <div>

            <Form>
                <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
            </Form>
            
            </div>
        )
    }
};

export default CreateNote;