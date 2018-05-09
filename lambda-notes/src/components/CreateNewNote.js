import React, { Component } from 'react'
import {
    Link,
    Route,
} from 'react-router-dom'
import { Button, Form, Label, Input, FormGroup, FormText } from 'reactstrap'



class CreateNewNote extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Form>
                <FormGroup>
                    <Label for='noteTitle'>Note Title</Label>
                    <Input type='text' id='noteTitle' placeholder='Note Title' />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Text Area</Label>
                    <Input type="textarea" name="text" id="exampleText" placeholder='Note Content' />
                </FormGroup>
                <Button color='info' size='lg'>Save</Button>
            </Form>
        )
    }
}

export default CreateNewNote
